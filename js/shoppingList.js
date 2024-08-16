// Shopping List Pagrindinė funkcija
const { getItemQuantityText, validateQuantity } = require('./helpers');

function shoppingList(cart) {
    if (cart.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }
    let itemsText = getItemQuantityText(cart.length);
    const line = '-'.repeat(64);
    let output = `Jūsų prekių krepšelyje yra ${cart.length} ${itemsText}:\n${line}\nPavadinimas     | Kiekis       | Vieneto kaina  | Viso mokėti  \n${line}\n`;
    cart.forEach((item, index) => {
        if (!validateQuantity(item.amount)) {
            return `Klaida: Kiekis prekei ${item.name} nėra sveikasis skaičius.`;
        }
        let nameField = `${item.name}`.padEnd(12);
        let amountField = `${item.amount} vnt`.padEnd(12);
        let priceField = `${(item.unitPrice / 100).toFixed(2)} Eur`.padEnd(14);
        let totalField = `${(item.amount * item.unitPrice / 100).toFixed(2)} Eur`.padEnd(14);

        output += `${index + 1}. ${nameField} | ${amountField} | ${priceField} | ${totalField}\n`;
    });
    output += `${line}`;
    return output;
}

module.exports = shoppingList;
