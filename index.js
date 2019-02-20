const step = (n, row = 0, stair = '') => {
    // Complete
    if (n === row) {
        return;
    }

    // Handling a row
    if (n === stair.length) {
        console.log(stair);
        return step(n, row + 1);
    }

    // Handling str on row
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    return step(n, row, stair);
};

module.exports = {
    step
}