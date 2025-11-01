import { DefaultLinker } from 'langium';
export class CiscoIosLinker extends DefaultLinker {
    constructor(services) {
        super(services);
    }
    getCandidate(refInfo) {
        const scope = this.scopeProvider.getScope(refInfo);
        const description = scope.getElement(refInfo.reference.$refText);
        if (description) {
            return description;
        }
        return this.createSilentLinkingError(refInfo);
    }
    createSilentLinkingError(refInfo) {
        return Object.assign(Object.assign({}, refInfo), { message: '' });
    }
    createLinkingError(refInfo) {
        return this.createSilentLinkingError(refInfo);
    }
}
//# sourceMappingURL=cisco-ios-linker.js.map