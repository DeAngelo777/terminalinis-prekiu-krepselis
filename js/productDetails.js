module.exports = function(cart, id) {
    const item = cart.find(item => item.id == id);
    if (item) {
        return "Prekė yra.";
    } else {
        return "Prekė nerasta.";
    }
};
