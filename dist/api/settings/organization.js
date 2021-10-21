"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPanel = void 0;
const actsAsListenableIframe_1 = require("../../io/actsAsListenableIframe");
/**
 *
 * Register a settings panel directly in the marketplace page of the plugin.
 * This will allow moderators to configure your plugin from their Livestorm dashboard
 *
 * @example Settings.Organization.registerPanel({ template, variables, onMessage })
 *
 * @doc https://developers.livestorm.co/docs/settings
 *
 */
function registerPanel(data) {
    return actsAsListenableIframe_1.default('settings-register-organization-panel', data);
}
exports.registerPanel = registerPanel;
//# sourceMappingURL=organization.js.map