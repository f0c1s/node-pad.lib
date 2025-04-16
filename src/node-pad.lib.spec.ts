import {
    left, right, padStart, padEnd, padNumber, padString
} from './node-pad.lib';

describe("node-pad.lib", () => {
    describe("left", () => {
        it("pads correctly", () => {
            const actual = left("abcd", 10, "0");
            const expected = "000000abcd";
            expect(actual).toEqual(expected);
        });
        it("pads correctly when pad is a word", () => {
            let actual = left("abcd", 10, "xyz");
            let expected = "xyzxyzabcd";
            expect(actual).toEqual(expected);
            actual = left("abcd", 10, "xyzw");
            expected = "zwxyzwabcd";
            expect(actual).toEqual(expected);
        });
    });
    describe("right", () => {
        it("pads correctly", () => {
            const actual = right("abcd", 10, "0");
            const expected = "abcd000000";
            expect(actual).toEqual(expected);
        });
        it("pads correctly when pad is a word", () => {
            let actual = right("abcd", 10, "xyz");
            let expected = "abcdxyzxyz";
            expect(actual).toEqual(expected);
            actual = right("abcd", 10, "xyzw");
            expected = "abcdxyzwxy";
            expect(actual).toEqual(expected);
        });
    });
    describe("padStart", () => {
        it("pads correctly", () => {
            const actual = padStart("abcd", 10, "0");
            const expected = "000000abcd";
            expect(actual).toEqual(expected);
        });
    });
    describe("padEnd", () => {
        it("pads correctly", () => {
            const actual = padEnd("abcd", 10, "0");
            const expected = "abcd000000";
            expect(actual).toEqual(expected);
        });
    });
    describe("padNumber", () => {
        it("pads correctly", () => {
            let actual = padNumber.left("abcd", 10);
            let expected = "000000abcd";
            expect(actual).toEqual(expected);
            actual = padNumber.right("1234", 10);
            expected = "1234000000";
            expect(actual).toEqual(expected);
        });
    });
    describe("padString", () => {
        it("pads correctly", () => {
            let actual = padString.left("abcd", 10);
            let expected = "      abcd";
            expect(actual).toEqual(expected);
            actual = padString.right("abcd", 10);
            expected = "abcd      ";
            expect(actual).toEqual(expected);
        });
    });
})
