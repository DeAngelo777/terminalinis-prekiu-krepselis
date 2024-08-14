function adjustNameEndings(name, amount) {
    if (amount > 1) {
        return name.endsWith('s') ? name.slice(0, -1) + 'i' : name;
    }
    return name;
}

function getItemQuantityText(amount) {
    if (amount === 1) {
        return 'prekė';
    } else {
        return 'prekės';
    }
}

function validateQuantity(amount) {
    return Number.isInteger(amount) && amount >= 0;
}

module.exports = { adjustNameEndings, getItemQuantityText, validateQuantity };

