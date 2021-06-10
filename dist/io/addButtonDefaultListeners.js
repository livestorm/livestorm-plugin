"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const sendEvent_1 = require("../io/sendEvent");
const subscribeToEvent_1 = require("../io/subscribeToEvent");
function addButtonDefaultListeners(eventName, _a) {
    var { onClick } = _a, options = __rest(_a, ["onClick"]);
    const uuid = uuid_1.v4();
    sendEvent_1.default({
        action: eventName,
        data: Object.assign(Object.assign({}, options), { id: uuid })
    });
    // TODO: we should suffix the eventName with the type of event, here it would be `${eventName}-${uuid}-click`
    subscribeToEvent_1.default(`${eventName}-${uuid}`, () => onClick());
    return uuid;
}
exports.default = addButtonDefaultListeners;
//# sourceMappingURL=addButtonDefaultListeners.js.map