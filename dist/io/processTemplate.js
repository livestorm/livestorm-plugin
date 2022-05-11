"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAugmentedVariableValue(value) {
    return value && typeof value === 'object'
        && ('value' in value)
        && (('inject' in value) || ('replace' in value));
}
function processTemplate(content, variables = {}) {
    // Inject the variables in the global __VARIABLES__
    let injectedVariables;
    const variablesToInject = {};
    const variablesToReplace = {};
    const variablesNotToReplace = [''];
    for (const variable in variables) {
        const value = variables[variable];
        if (isAugmentedVariableValue(value)) {
            if (value.inject !== false) {
                variablesToInject[variable] = value.value;
            }
            if (value.replace === false) {
                variablesNotToReplace.push(variable);
            }
            else {
                variablesToReplace[variable] = value.value;
            }
        }
        else {
            variablesToInject[variable] = value;
            variablesToReplace[variable] = value;
        }
    }
    try {
        injectedVariables = `<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(variablesToInject)}</script>`;
    }
    catch (e) {
        throw new Error('The variables could not been injected: ' + e);
    }
    // Replace all occurences of {{ variable }} with the variable value
    const replacedOccurrences = content.replace(/({{)([\w\s]+)(}})/g, (fullMatch, match1, match2) => {
        const variable = match2.trim();
        const value = variable in variables ? (variablesNotToReplace.includes(variable) ? fullMatch : variablesToReplace[variable]) : fullMatch;
        if (typeof value === "object") {
            try {
                return JSON.stringify(value);
            }
            catch (e) {
                throw new Error(`The variable "${variable}" could not been replaced in the template: ${e}`);
            }
        }
        return String(value);
    });
    return `${injectedVariables}\n${replacedOccurrences}`;
}
exports.default = processTemplate;
//# sourceMappingURL=processTemplate.js.map