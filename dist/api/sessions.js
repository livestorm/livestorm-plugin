"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = void 0;
const simpleCallbackHandler_1 = require("../io/simpleCallbackHandler");
/**
  * Returns the current session information
  *
  * @example await Livestorm.Session.current()
  *
  * @returns a promise that resolves with the session information as a hash
  *
  */
function current() {
    return new Promise((resolve) => {
        simpleCallbackHandler_1.default({
            action: 'session-data',
            callback: ({ session }) => resolve(session)
        });
    });
}
exports.current = current;
//# sourceMappingURL=sessions.js.map