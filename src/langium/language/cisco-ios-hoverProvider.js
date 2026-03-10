import { CstUtils } from "langium";
import { commandDetails } from './details/commandDetails.js';
export class CiscoIosHoverProvider {
    constructor(services) {
        this.services = services;
    }
    getHoverContent(document, params) {
        var _a, _b, _c;
        const rootNode = (_b = (_a = document.parseResult) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.$cstNode;
        if (!rootNode)
            return undefined;
        const offset = document.textDocument.offsetAt(params.position);
        const leafNode = CstUtils.findLeafNodeAtOffset(rootNode, offset);
        if (!leafNode || leafNode.offset + leafNode.length <= offset)
            return undefined;
        return this.getHoverFromDetails((_c = leafNode.astNode) === null || _c === void 0 ? void 0 : _c.$type);
    }
    getHoverFromDetails(key) {
        if (!key)
            return undefined;
        const detail = commandDetails[key];
        if (!detail)
            return undefined;
        const content = {
            kind: 'markdown',
            value: `**${detail.label.replaceAll("<", "").replaceAll(">", "")}**\n\n${detail.description}\n\nKey: ${key}\n\nDefault-Value: ${detail.insert}`
        };
        return { contents: content };
    }
}
//# sourceMappingURL=cisco-ios-hoverProvider.js.map