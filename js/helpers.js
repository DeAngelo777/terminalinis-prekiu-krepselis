function checkAmount(amount) {
    return Number.isInteger(amount) && amount > 0;
}

module.exports = { checkAmount };
