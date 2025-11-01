import { EmptyFileSystem } from 'langium';
import { startLanguageServer } from 'langium/lsp';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createCiscoIosServices } from './cisco-ios-module.js';
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);
const connection = createConnection(messageReader, messageWriter);
const { shared } = createCiscoIosServices(Object.assign({ connection }, EmptyFileSystem));
startLanguageServer(shared);
//# sourceMappingURL=main-browser.js.map