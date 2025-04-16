"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_pad_lib_1 = require("./node-pad.lib");
describe("node-pad.lib", () => {
    describe("left", () => {
        it("pads correctly", () => {
            const actual = (0, node_pad_lib_1.left)("abcd", 10, "0");
            const expected = "000000abcd";
            expect(actual).toEqual(expected);
        });
        it("pads correctly when pad is a word", () => {
            let actual = (0, node_pad_lib_1.left)("abcd", 10, "xyz");
            let expected = "xyzxyzabcd";
            expect(actual).toEqual(expected);
            actual = (0, node_pad_lib_1.left)("abcd", 10, "xyzw");
            expected = "zwxyzwabcd";
            expect(actual).toEqual(expected);
        });
    });
    describe("right", () => {
        it("pads correctly", () => {
            const actual = (0, node_pad_lib_1.right)("abcd", 10, "0");
            const expected = "abcd000000";
            expect(actual).toEqual(expected);
        });
        it("pads correctly when pad is a word", () => {
            let actual = (0, node_pad_lib_1.right)("abcd", 10, "xyz");
            let expected = "abcdxyzxyz";
            expect(actual).toEqual(expected);
            actual = (0, node_pad_lib_1.right)("abcd", 10, "xyzw");
            expected = "abcdxyzwxy";
            expect(actual).toEqual(expected);
        });
    });
    describe("padStart", () => {
        it("pads correctly", () => {
            const actual = (0, node_pad_lib_1.padStart)("abcd", 10, "0");
            const expected = "000000abcd";
            expect(actual).toEqual(expected);
        });
    });
    describe("padEnd", () => {
        it("pads correctly", () => {
            const actual = (0, node_pad_lib_1.padEnd)("abcd", 10, "0");
            const expected = "abcd000000";
            expect(actual).toEqual(expected);
        });
    });
    describe("padNumber", () => {
        it("pads correctly", () => {
            let actual = node_pad_lib_1.padNumber.left("abcd", 10);
            let expected = "000000abcd";
            expect(actual).toEqual(expected);
            actual = node_pad_lib_1.padNumber.right("1234", 10);
            expected = "1234000000";
            expect(actual).toEqual(expected);
        });
    });
    describe("padString", () => {
        it("pads correctly", () => {
            let actual = node_pad_lib_1.padString.left("abcd", 10);
            let expected = "      abcd";
            expect(actual).toEqual(expected);
            actual = node_pad_lib_1.padString.right("abcd", 10);
            expected = "abcd      ";
            expect(actual).toEqual(expected);
        });
    });
});
