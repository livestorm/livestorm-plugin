"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processTemplate(content, variables = {}) {
    // Inject the variables
    const injectedVariables = `<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variables)}</script>`;
    // Replace all occurences of {{ string }} with the variable (empty if not found)
    const replacedOccurrences = content.replaceAll(/({{)([0-9a-zA-Z-\s]+)(}})/g, (fullMatch, match1, match2) => {
        const variable = match2.trim();
        const value = variable in variables ? variables[variable] : '';
        if (typeof value === "object")
            return JSON.stringify(value);
        return String(value);
    });
    return `${injectedVariables}\n${replacedOccurrences}`;
}
exports.default = processTemplate;
//# sourceMappingURL=processTemplate.js.map