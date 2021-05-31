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
const configuration_1 = require("@/configuration");
function getScopeId(scope = 'event') {
    if (scope === 'event')
        return configuration_1.default.eventTypeId;
    else if (scope === 'session')
        return configuration_1.default.sessionId;
    else if (scope === 'organization')
        return configuration_1.default.organizationId;
    else
        return configuration_1.default.eventTypeId;
}
exports.default = {
    /**
      *
      * Store a value under a specific key. This storage is persistant and shared across participants of the event
      *
      *
      * @example Storage.setItem('key', 'value')
      *
      * @param key - The key that will allow you to retrieve the value
      * @param value - The value you want to store
      *
      * @returns a promise that resolves whenever the value has been successfuly stored
      *
      *
    */
    setItem(key, value, options = { scope: 'event' }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organizationId, pluginId, pluginHost } = configuration_1.default;
            return yield fetch(`${pluginHost}/api/v1/storage_keys`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    key,
                    value,
                    organization_id: organizationId,
                    session_id: getScopeId(options.scope),
                    plugin_id: pluginId
                })
            });
        });
    },
    /**
      *
      * Retrieve a value set at a specific key. This storage is persistant and shared across participants of the event
      *
      *
      * @example Storage.getItem('key')
      *
      * @param key - The key at which you item is set
      *
      * @returns a promise that resolves with the stored value
      *
      *
    */
    getItem(key, options = { scope: 'event' }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organizationId, pluginId, pluginHost } = configuration_1.default;
            const res = yield fetch(`${pluginHost}/api/v1/storage_keys?organization_id=${organizationId}&session_id=${getScopeId(options.scope)}&plugin_id=${pluginId}&key=${key}`);
            const body = yield res.json();
            return body.storageKey ? body.storageKey.value : null;
        });
    }
};
//# sourceMappingURL=storage.js.map