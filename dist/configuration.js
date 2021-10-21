"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    static set(data) {
        this.data = Object.assign(Object.assign({}, this.data), data);
    }
    static get(key) {
        return this.data[key];
    }
}
exports.default = Configuration;
Configuration.data = {};
//# sourceMappingURL=configuration.js.map