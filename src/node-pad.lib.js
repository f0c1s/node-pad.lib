"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padEnd = exports.padStart = exports.padString = exports.padNumber = void 0;
exports.left = left;
exports.right = right;
function left(input, length, pad) {
    if (pad === "" || input.length > length) {
        return input;
    }
    return Array(Math.ceil(length / pad.length))
        .fill(pad)
        .join("").split("")
        .reverse().slice(0, length - input.length).reverse()
        .join("")
        + input;
}
function right(input, length, pad) {
    if (pad === "" || input.length > length) {
        return input;
    }
    return input + Array(Math.ceil(length / pad.length))
        .fill(pad)
        .join("").split("")
        .slice(0, length - input.length)
        .join("");
}
const padNumber = {
    left(input, length) {
        return left(input, length, "0");
    },
    right(input, length) {
        return right(input, length, "0");
    },
};
exports.padNumber = padNumber;
const padString = {
    left(input, length) {
        return left(input, length, " ");
    },
    right(input, length) {
        return right(input, length, " ");
    },
};
exports.padString = padString;
const padStart = left;
exports.padStart = padStart;
const padEnd = right;
exports.padEnd = padEnd;
