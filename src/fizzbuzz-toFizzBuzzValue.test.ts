import {describe, it} from "mocha";
import {toFizzBuzzValue} from "./fizzbuzz";
import {expect} from "chai";

describe("toFizzBuzzValue", () => {
    it("becomes {text: '1'}", () => {
        expect(toFizzBuzzValue({
            original: 1, text: undefined
        })).deep.equal({
            text: "1"
        });
    });
    it("becomes {text: '2'}", () => {
        expect(toFizzBuzzValue({
            original: 2, text: undefined
        })).deep.equal({
            text: "Aaa"
        });
    });
    it("becomes {text: 'Fizz'}", () => {
        expect(toFizzBuzzValue({
            original: 3, text: "Fizz"
        })).deep.equal({
            text: "Fizz"
        });
    });
    it("becomes {text: 'Buzz'}", () => {
        expect(toFizzBuzzValue({
            original: 5, text: undefined
        })).deep.equal({
            text: "Buzz"
        });
    });
});
