"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processTemplate(content, variables) {
    let node = content;
    for (const variable in variables) {
        node = node.split(`{{${variable}}}`).join(String(variables[variable]));
        node = node.split(`{{ ${variable} }}`).join(String(variables[variable]));
    }
    return node;
}
exports.default = processTemplate;
//# sourceMappingURL=processTemplate.js.map