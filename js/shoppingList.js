module.exports = function(cart) {
    if (cart.length === 0) {
        return "Krepšelis tuščias.";
    }
    return `Prekių skaičius: ${cart.length}.`;
};
