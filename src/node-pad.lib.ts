function left(input: string, length: number, pad: string) {
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

function right(input: string, length: number, pad: string) {
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
    left(input: string, length: number) {
        return left(input, length, "0");
    },
    right(input: string, length: number) {
        return right(input, length, "0");
    },
};

const padString = {
    left(input: string, length: number) {
        return left(input, length, " ");
    },
    right(input: string, length: number) {
        return right(input, length, " ");
    },
};

const padStart = left;
const padEnd = right;

export {
    left,
    right,
    padNumber,
    padString,
    padStart,
    padEnd
};
