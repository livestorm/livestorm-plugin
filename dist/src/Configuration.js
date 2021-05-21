"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    static set(data) {
        for (const key in data) {
            this[key] = data[key];
        }
    }
}
exports.default = Configuration;
Configuration.url = '*';
//# sourceMappingURL=configuration.js.map