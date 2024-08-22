import { getItemQuantityText, validateQuantity } from './productDetails.js';

export function shoppingList(cart) {
    if (cart.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }
    const itemsText = getItemQuantityText(cart.length);
    const headers = "Pavadinimas" + ' '.repeat(3) + "| Kiekis " + ' '.repeat(6) + "| Vieneto kaina | Viso mokėti" + ' '.repeat(3);
    const lineLength = headers.length;
    const line = '-'.repeat(lineLength);

    let output = `Jūsų prekių krepšelyje yra ${cart.length} ${itemsText}:\n${line}\n${headers}\n${line}\n`;
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index];
        if (!validateQuantity(item.amount)) {
            return `Klaida: Kiekis prekei ${item.name} nėra sveikasis skaičius.`;
        }
        const nameField = `${item.name}`.padEnd(10);
        const amountField = `${item.amount} vnt`.padEnd(12);
        const priceField = `${(item.unitPrice / 100).toFixed(2)} Eur`.padEnd(14);
        const totalString = `${(item.amount * item.unitPrice / 100).toFixed(2)} Eur`;
        const totalField = totalString.length > 10 ? totalString.slice(0, 10) + '...' : totalString.padEnd(10);

        output += `${index + 1}. ${nameField} | ${amountField} | ${priceField} | ${totalField}\n`;
    }
    output += `${line}`;
    return output;
}
