"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleCallbackHandler_1 = require("../io/simpleCallbackHandler");
/**
  * Returns the session information
  *
  * @example await Livestorm.Session()
  *
  * @returns a promise that resolves with the session information as a hash
  *
  */
function Session() {
    return new Promise((resolve) => {
        simpleCallbackHandler_1.default({
            action: 'session-data',
            callback: ({ session }) => resolve(session)
        });
    });
}
exports.default = Session;
//# sourceMappingURL=session.js.map