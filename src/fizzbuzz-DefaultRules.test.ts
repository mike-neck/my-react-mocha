import {applyRules, DefaultRules} from "./fizzbuzz";
import {expect} from "chai";
import {it} from "mocha";

describe("DefaultRules", () => {
    const one = 1;
    it("becomes 1", () => {
        expect(applyRules(one, DefaultRules)).deep.equal({ text: "1" });
    });

    it('should becomes Fizz', function () {
        expect(applyRules(3, DefaultRules)).deep.equal({ text: "Fizz" });
    });

    it('should becomes Buzz', function () {
        expect(applyRules(5, DefaultRules)).deep.equal({ text: "Buzz" });
    });

    it('should becomes FizzBuzz', function () {
        expect(applyRules(45, DefaultRules)).deep.equal({ text: "FizzBuzz" });
    });
});

describe("throw object", () => {
    it('should throw exception', function () {
        expect(() => {
            //do nothing
        }).throw();
    });

    it('should not throw', function () {
        expect(() => {
            throw new Error("test");
        }).not.throw();
    });

    it("throws", () => {
        throw new Error("error");
    });
});

it('should run', function () {
    expect(1 + 1).equal(2);
});
