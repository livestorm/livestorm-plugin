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
exports.track = void 0;
const configuration_1 = require("../../configuration");
/**
 *
 * Store a value under a specific key. This storage is persistant and shared across participants of the event
 *
 * @example Dashboard.Event.track({
 *   name: {
 *     en: '# of emoji reactions',
 *     fr: '# de réactions emoji',
 *   },
 *   key: 'nb-of-emoji-reactions',
 *   datatype: 'increment',
 * })
 *
 * @doc https://developers.livestorm.co/docs/storage#setitem
 *
 */
function track(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const organizationId = configuration_1.default.get('organizationId');
        const pluginHost = configuration_1.default.get('pluginHost');
        const pluginId = configuration_1.default.get('pluginId');
        const token = configuration_1.default.get('token');
        return yield fetch(`${pluginHost}/api/v1/dashboard/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({
                key: options.key,
                name: options.name,
                value: options.value,
                datatype: options.datatype,
                organization_id: organizationId,
                plugin_id: pluginId
            })
        });
    });
}
exports.track = track;
//# sourceMappingURL=event.js.map