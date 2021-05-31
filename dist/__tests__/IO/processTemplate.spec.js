"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTemplate_1 = require("../../src/IO/processTemplate");
describe('processTemplate', () => {
    it('computes all variables', () => {
        const template = '<div>{{ var }} {{ var2 }}</div>';
        const processedTemplate = processTemplate_1.default(template, { var2: 'coucou' });
        expect(processedTemplate).toStrictEqual('<div>{{ var }} coucou</div>');
    });
});
//# sourceMappingURL=processTemplate.spec.js.map