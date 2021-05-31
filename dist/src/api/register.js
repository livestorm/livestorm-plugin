"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscribeToEvent_1 = require("@/io/subscribeToEvent");
const configuration_1 = require("@/configuration");
/**
  * Allows to register and start the plugin at the correct moment.
  * Code executed outside of the register function might not be loaded properly (unmounted or not yet defined components).
  *
  * Think of this function as the equivalent of watching the load event of the window to start your app
  *
  * @example Livestorm.register(() => {
  *  // Your code goes here
  * })
  *
  * @param main - The code of your app
  *
  *
*/
function register(main) {
    subscribeToEvent_1.default('register', (data) => {
        configuration_1.default.set(data);
        main();
    });
}
exports.default = register;
//# sourceMappingURL=register.js.map