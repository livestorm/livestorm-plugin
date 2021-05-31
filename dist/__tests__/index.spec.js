"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('index', () => {
    it('exports an object with all exposed apis', () => {
        expect(index_1.default.PubSub.publish).not.toBeNull();
        expect(index_1.default.PubSub.subscribe).not.toBeNull();
        expect(index_1.default.RegisterShareButton.register).not.toBeNull();
    });
});
//# sourceMappingURL=index.spec.js.map