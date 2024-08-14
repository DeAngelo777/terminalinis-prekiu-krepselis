module.exports = function(cart) {
    if (cart.length == 0) {
        return "Krepšelis tuščias.";
    }
    return "Yra prekių.";
};
