module.exports = function(cart, id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        return `Prekė: ${item.name}, Kaina: ${item.unitPrice} Eur.`;
    } else {
        return "Prekė nerasta.";
    }
};
