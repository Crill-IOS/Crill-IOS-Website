import { DefaultDocumentValidator } from 'langium';
/**
 * Custom DocumentValidator that filters out specific parser errors.
 */
export class CiscoIosDocumentValidator extends DefaultDocumentValidator {
    async validateDocument(document, options) {
        const diagnostics = await super.validateDocument(document, options);
        // Filter out the NL EOF error
        return diagnostics.filter(diagnostic => !this.shouldSuppressDiagnostic(diagnostic));
    }
    /**
     * Determines if a diagnostic should be suppressed.
     *
     * @param diagnostic The diagnostic to check
     * @returns true if the diagnostic should be suppressed
     */
    shouldSuppressDiagnostic(diagnostic) {
        const message = diagnostic.message;
        // Suppress unnecessary parser errors
        if (message.includes("Expecting token of type 'exit' but found ``.")
            || message.includes("but found: ''")
            || message.includes("Expecting token of type 'NL' but found ``.")) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=cisco-ios-documentValidator.js.map