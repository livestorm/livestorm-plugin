"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPanel = void 0;
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
/**
 *
 * Register a panel in the settings of an event.
 * This will allow moderators to configure your plugin from their Livestorm dashboard
 *
 * @example Settings.Event.registerPanel({ template, variables, onMessage })
 *
 * @doc https://developers.livestorm.co/docs/settings
 *
 */
function registerPanel(data) {
    return actsAsListenableIframe_1.default('settings-register-event-panel', data);
}
exports.registerPanel = registerPanel;
//# sourceMappingURL=event.js.map