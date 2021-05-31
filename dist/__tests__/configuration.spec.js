"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../src/configuration");
describe('Configuration', () => {
    const data = {
        'eventTypeId': 'eventTypeId',
        'organizationId': 'organizationId',
        'pluginHost': 'pluginHost',
        'pluginId': 'pluginId',
        'pluginName': 'pluginName',
        'sessionId': 'sessionId',
    };
    it('should store accessible data', () => {
        configuration_1.default.set(data);
        // eventTypeId
        expect(configuration_1.default.eventTypeId).toBe('eventTypeId');
        // organizationId
        expect(configuration_1.default.organizationId).toBe('organizationId');
        // pluginHost
        expect(configuration_1.default.pluginHost).toBe('pluginHost');
        // pluginId
        expect(configuration_1.default.pluginId).toBe('pluginId');
        // pluginName
        expect(configuration_1.default.pluginName).toBe('pluginName');
        // sessionId
        expect(configuration_1.default.sessionId).toBe('sessionId');
    });
});
//# sourceMappingURL=configuration.spec.js.map