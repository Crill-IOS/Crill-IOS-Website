import { DefaultCompletionProvider } from "langium/lsp";
import { CompletionList, Range, TextEdit } from "vscode-languageserver";
import * as ast from "langium/lib/languages/generated/ast.js";
import { commandDetails, commandTokenDefaults } from "./details/commandDetails.js";
export class CiscoIosCompletionProvider extends DefaultCompletionProvider {
    constructor(services) {
        super(services);
        this.services = services;
        this.completionOptions = {
            triggerCharacters: ['/']
        };
        this.currentDefaults = {};
    }
    /**
     * @description
     * takes the document and the params and build contexts and
     * returns completions for each context
     *
     * @param document document that kontext
     * @param params Completion Params that contain the cursour position
     * @param _cancelToken Chancelation token
     * @returns a completion list promise with completions in
     * the current context of the cursour
     */
    async getCompletion(document, params, _cancelToken) {
        let completions = [];
        //build contexts via document and params
        const contexts = this.buildContexts(document, params.position);
        // Handles giving no Completion for Comments
        if (this.isCursorInComment(document, params))
            return CompletionList.create([], true);
        // Read user settings once per request and apply default substitutions
        const defaults = await this.getTokenDefaults();
        this.currentDefaults = defaults;
        // acceptor creates and saves completion items from a given context
        // and stores it in the "completions" array
        const acceptor = (context, value) => {
            const resolved = value.insertText
                ? Object.assign(Object.assign({}, value), { insertText: this.applyDefaults(value.insertText, defaults) }) : value;
            const completionItem = this.fillCompletionItem(context, resolved);
            if (completionItem) {
                this.applyTemplateReplacement(document, params, completionItem);
                completions.push(completionItem);
            }
        };
        //requests completion for every feature in every context
        for (const context of contexts) {
            for (const feature of context.features) {
                this.completionFor(context, feature, acceptor);
            }
        }
        // create a completion list from the collected completions
        return CompletionList.create(this.deduplicateItems(completions), true);
    }
    /**
     * @description
     * creates completion Items with Details from "Command_Details.json"
     * and puts them into the "completions" array
     *
     * @param context a context from the document
     * @param next the next feature from the context.features
     * @param acceptor the acceptor that saves completion items into the "completions" array
     * @returns nothing (could return a maybepromise)
     */
    completionFor(context, next, acceptor) {
        const detail = next.type ? commandDetails[next.type] : undefined;
        //if details exist for "next.type" create 
        // a completion item with the details
        if (detail) {
            const insertText = (next.type && this.currentDefaults[next.type] !== undefined)
                ? this.currentDefaults[next.type]
                : detail.insert;
            acceptor(context, {
                label: detail.label,
                kind: detail.kind,
                detail: detail.description,
                sortText: "1",
                insertTextFormat: 2,
                insertText
            });
            //if no details were found use fallback instead
        }
        else if (ast.isKeyword(next.feature) && next.type != "KEYWORDS") {
            return this.completionForKeyword(context, next.feature, acceptor);
        }
    }
    /**
     * @deprecated only used as fallback when no details exist for a feature type
     *
     * @description generates a Completion Item via the "keyword" name
     * from the grammar (ast)
     *
     * @param context a context from a document
     * @param keyword a keyword from the ast
     * @param acceptor the acceptor that saves completion items into the "completions" array
     *
     * @returns nothing (could return a maybepromise)
     */
    completionForKeyword(context, keyword, acceptor) {
        if (!this.filterKeyword(context, keyword)) {
            return;
        }
        acceptor(context, {
            label: keyword.value,
            kind: this.getKeywordCompletionItemKind(keyword),
            detail: '',
            sortText: '1',
        });
    }
    /**
     * Überprüft, ob der Cursor in einem Kommentar steht
     * @param document das gesamte Dokument
     * @param params enthält die Cursor Position
     * @returns true -> innerhalb eines Kommentars; false -> außerhalb eines Kommentars
     */
    isCursorInComment(document, params) {
        var _a, _b;
        const offset = document.textDocument.offsetAt(params.position);
        const text = document.textDocument.getText();
        const lexer = this.services.parser.Lexer;
        const lexResult = lexer.tokenize(text);
        const commentTokens = (_a = lexResult.hidden) !== null && _a !== void 0 ? _a : [];
        for (const commentToken of commentTokens) {
            if (offset > commentToken.startOffset
                && params.position.line + 1 <= ((_b = commentToken.endLine) !== null && _b !== void 0 ? _b : -1)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Reads token overrides from VS Code (Crill-IOS.defaults) and merges them
     * over the defaults declared in Command_Details.json.
     */
    async getTokenDefaults() {
        try {
            const cfg = await this.services.shared.workspace.ConfigurationProvider
                .getConfiguration('Crill-IOS', 'defaults');
            const defaults = Object.assign({}, commandTokenDefaults);
            if (cfg) {
                for (const [key, value] of Object.entries(cfg)) {
                    if (typeof value === 'string') {
                        defaults[key] = value;
                    }
                }
            }
            return defaults;
        }
        catch (_a) {
            return Object.assign({}, commandTokenDefaults);
        }
    }
    /**
     * Replaces placeholder tokens in an insert text with the user's configured defaults.
     */
    applyDefaults(insertText, defaults) {
        return insertText.replace(/__([A-Za-z0-9_]+)__/g, (match, tokenName) => {
            var _a;
            return (_a = defaults[tokenName]) !== null && _a !== void 0 ? _a : match;
        });
    }
    applyTemplateReplacement(document, params, item) {
        if (typeof item.label !== 'string' || !item.label.startsWith('/') || !item.insertText) {
            return;
        }
        const text = document.textDocument.getText();
        const offset = document.textDocument.offsetAt(params.position);
        let start = offset;
        while (start > 0 && !/\s/.test(text[start - 1])) {
            start--;
        }
        if (text[start] !== '/') {
            return;
        }
        let end = offset;
        while (end < text.length && !/\s/.test(text[end])) {
            end++;
        }
        item.textEdit = TextEdit.replace(Range.create(document.textDocument.positionAt(start), document.textDocument.positionAt(end)), item.insertText);
    }
    /**
     * Sammelt die gewünschten Node values aus dem gesamten Dokument. In Visited werden die angesehenen Nodes gespeichert damit kein Loop erzeugt wird.
     * @param node startNode
     * @returns String-Array mit gesammelten Values
     */
    collectFromType(type, node) {
        const result = [];
        const visited = new Set();
        /**
         * Schaut nach ob eine node den type hat. Wenn ja fügt zu result hinzu.
         * @param node Node die geprüft wird
         * @returns
         */
        function checkForType(node) {
            if (visited.has(node))
                return;
            visited.add(node);
            if (node.$type === type) {
                result.push(node.value);
            }
            // Alle Eigenschaften des Knotens durchgehen und potenziell Subknoten.
            for (const property in node) {
                const wert = node[property];
                /*z.B. {
                            $type: 'IP,
                            ip: '192.168.0.1',
                            mask: '255.255.255.0'
                            ...
                        } ist $type, ip und mask die properties und 'IP', '192.168.0.1' und '255.255.255.0' die werte
                */
                if (Array.isArray(wert)) {
                    for (const eintrag of wert) {
                        if (eintrag && typeof eintrag === 'object' && '$type' in eintrag) {
                            checkForType(eintrag);
                        }
                    }
                }
                else if (wert && typeof wert === 'object' && '$type' in wert) {
                    checkForType(wert);
                }
            }
        }
        checkForType(node);
        return result;
    }
}
//# sourceMappingURL=cisco-ios-completionProvider.js.map