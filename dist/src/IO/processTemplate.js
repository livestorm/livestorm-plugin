"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processTemplate(content, variables) {
    let node = content;
    for (let variable in variables) {
        node = node.split(`{{${variable}}}`).join(variables[variable]);
        node = node.split(`{{ ${variable} }}`).join(variables[variable]);
    }
    return node;
}
exports.default = processTemplate;
//# sourceMappingURL=processTemplate.js.map