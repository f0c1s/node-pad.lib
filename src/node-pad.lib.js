function left(input, length, pad) {
    let out = input.toString()
    while (out.length < length) {
        out = pad + out
    }
    return out
}

function right(input, length, pad) {
    let out = input.toString()
    while (out.length < length) {
        out += pad
    }
    return out
}

const padnumber = {
    left(input, length) {
        return left(input, length, '0')
    },
    right(input, length) {
        return right(input, length, '0')
    }
}

const padstring = {
    left(input, length) {
        return left(input, length, ' ')
    },
    right(input, length) {
        return right(input, length, ' ')
    }
}

module.exports = {
    left,
    right,
    padnumber,
    padstring
}
