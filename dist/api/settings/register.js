"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscribeToEvent_1 = require("../../io/subscribeToEvent");
const configuration_1 = require("../../configuration");
/**
 * Allows to register a settings application
 *
 * Think of this function as the equivalent of watching the load event of the window to start your app
 *
 * @example Livestorm.register(() => {
 *  // Your code goes here
 * })
 *
 * @param main - The code of your app
 *
 */
function register(main) {
    subscribeToEvent_1.default('settings-register', (data) => {
        configuration_1.default.set(data);
        main();
    });
}
exports.default = register;
//# sourceMappingURL=register.js.map