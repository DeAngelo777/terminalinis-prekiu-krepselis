// Paglbinė funkcija
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

module.exports = { getItemQuantityText, validateQuantity };
