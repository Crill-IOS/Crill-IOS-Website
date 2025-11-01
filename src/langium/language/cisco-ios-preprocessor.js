import { DefaultLangiumDocumentFactory } from 'langium';
import { TextDocument } from 'langium';
export class PreprocessingLangiumDocumentFactory extends DefaultLangiumDocumentFactory {
    constructor(services) {
        super(services);
    }
    // Implementierung
    fromTextDocument(textDocument, uri, optionsOrToken) {
        console.log("fkjelsafjklesflaesjf");
        // Preprocess: Kommentare entfernen
        const preprocessedText = textDocument.getText()
            .split('\n')
            .map(line => line.split('#')[0].split('!')[0])
            .join('\n');
        const newDoc = TextDocument.create(textDocument.uri, textDocument.languageId, textDocument.version, preprocessedText);
        // Prüfen, ob async
        const isAsync = optionsOrToken && typeof optionsOrToken.isCancellationRequested === 'boolean';
        if (isAsync) {
            return super.fromTextDocument(newDoc, uri, optionsOrToken);
        }
        else {
            return super.fromTextDocument(newDoc, uri, optionsOrToken);
        }
    }
}
//# sourceMappingURL=cisco-ios-preprocessor.js.map