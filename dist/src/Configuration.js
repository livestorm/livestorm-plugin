"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    data: {
        url: '*'
    },
    set(config) {
        this.data = Object.assign(Object.assign({}, this.data), config);
    }
};
exports.default = config;
//# sourceMappingURL=Configuration.js.map