"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle_1 = require("../Assets/baseStyle");
function processTemplate(content, userVariables) {
    let node = content;
    const variables = Object.assign({ style: baseStyle_1.default }, userVariables);
    for (let variable in variables) {
        node = node.split(`{{${variable}}}`).join(variables[variable]);
        node = node.split(`{{ ${variable} }}`).join(variables[variable]);
    }
    return node;
}
exports.default = processTemplate;
//# sourceMappingURL=processTemplate.js.map