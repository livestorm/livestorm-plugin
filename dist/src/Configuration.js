"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    data: {
        url: '*'
    },
    set(newConfig) {
        this.data = Object.assign(Object.assign({}, this.data), newConfig);
    }
};
exports.default = config;
//# sourceMappingURL=Configuration.js.map