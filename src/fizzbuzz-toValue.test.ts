import {test} from "mocha";
import {toValue} from "./fizzbuzz";
import {expect} from "chai";

test("toValue 1 becomes {original:1,text:undefined}", () => {
    expect(toValue(1)).deep.equal({ original: 1, text: undefined});
});

test("toValue 2 becomes {original:2,text:undefined}", () => {
    expect(toValue(2)).deep.equal({ original: 1, text: undefined});
});

test("toValue 3 becomes {original:3,text:undefined}", () => {
    expect(toValue(3)).deep.equal({ original: 3, text: "Fizz"});
});
