const { adjustNameEndings, validateQuantity } = require('./helpers');

module.exports = function(cart, id) {
    const item = cart.find(item => item.id === id);
    if (!item) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }
    if (!validateQuantity(item.amount)) {
        return `Klaida: Kiekis prekei ${item.name} nėra sveikasis skaičius.`;
    }
    const adjustedName = adjustNameEndings(item.name, item.amount);
    return `------------------------------
Prekės informacija
------------------------------
ID            | ${item.id}
Pavadinimas   | ${adjustedName}
Kiekis        | ${item.amount} vnt
Vieneto kaina | ${item.unitPrice.toFixed(2)} Eur
Viso mokėti   | ${(item.amount * item.unitPrice).toFixed(2)} Eur
------------------------------`;
};

