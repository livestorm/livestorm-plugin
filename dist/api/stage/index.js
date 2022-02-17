"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = exports.insertHTML = void 0;
const Buttons = require("./buttons");
exports.Buttons = Buttons;
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
function insertHTML(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const listenableIframe = yield actsAsListenableIframe_1.default('stage-insert-html', options);
        return Object.assign({}, listenableIframe);
    });
}
exports.insertHTML = insertHTML;
//# sourceMappingURL=index.js.map