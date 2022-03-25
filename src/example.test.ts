import { describe } from "mocha";
import {expect} from "chai";

describe("Example", () => {
    it("is 1, 1 + 0", () => {
        expect(1 + 1).equal(1, "1 + 1 = 1");
    });

    it('should be 2, 2 * 0', function () {
        // noinspection PointlessArithmeticExpressionJS
        expect(2 * 0).equal(2, "2 * 0 = 0");
    });
});
