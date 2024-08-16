const { adjustNameEndings, getItemQuantityText, validateQuantity } = require('./helpers');

module.exports = function(cart) {
    if (cart.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }
    let itemsText = getItemQuantityText(cart.length);
    let output = `Jūsų prekių krepšelyje yra ${cart.length} ${itemsText}:\n-------------------------------------------------------------\nPavadinimas     | Kiekis       | Vieneto kaina | Viso mokėti  \n-------------------------------------------------------------\n`;
    cart.forEach((item, index) => {
        if (!validateQuantity(item.amount)) {
            return `Klaida: Kiekis prekei ${item.name} nėra sveikasis skaičius.`;
        }
        const adjustedName = adjustNameEndings(item.name, item.amount);
        let nameField = `${adjustedName}`.padEnd(16);
        let amountField = `${item.amount} vnt`.padEnd(12);
        let priceField = `${item.unitPrice.toFixed(2)} Eur`.padEnd(14);
        let totalField = `${(item.amount * item.unitPrice).toFixed(2)} Eur`.padEnd(14);

        output += `${index + 1}. ${nameField} | ${amountField} | ${priceField} | ${totalField}\n`;
    });
    output += "-------------------------------------------------------------";
    return output;
};