export { productDetails, getItemQuantityText, validateQuantity };

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

function productDetails(cart, id) {
    const item = cart.find(item => item.id === id);
    if (!item) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }
    if (!validateQuantity(item.amount)) {
        return `Klaida: Kiekis prekei ${item.name} nėra sveikasis skaičius.`;
    }
    const line = '-'.repeat(30);
    return `${line}
Prekės informacija
${line}
ID            | ${item.id}
Pavadinimas   | ${item.name}
Kiekis        | ${item.amount} vnt
Vieneto kaina | ${(item.unitPrice / 100).toFixed(2)} Eur
Viso mokėti   | ${(item.amount * item.unitPrice / 100).toFixed(2)} Eur
${line}`;
}
