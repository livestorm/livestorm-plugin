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
exports.upload = void 0;
const configuration_1 = require("../../../configuration");
function upload(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = `${configuration_1.default.get('pluginHost')}/api/v1/medias`;
        const [fileName, fileExtension] = params.fileName.split('.');
        const response = yield fetch(request, {
            method: 'POST',
            body: JSON.stringify({
                base64: params.base64,
                extension: fileExtension,
                filename: fileName
            }),
            headers: { 'Content-Type': 'Application/JSON', }
        });
        const { url } = yield response.json();
        return url;
    });
}
exports.upload = upload;
//# sourceMappingURL=index.js.map