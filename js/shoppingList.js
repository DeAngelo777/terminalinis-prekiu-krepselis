

export function shoppingList(list, id) {
    if (list.length === 0 ) (
        console.log('Šiuo metu, jūsų prekių krepšelis yra tuščias.')
    ); else {

return ('Jūsų prekių krepšelyje yra ' + list.length + ' prekes\n-----------------------------------------------------------\nPavadinimas | Kiekis  | Vieneto kaina | Viso mokėti\n-----------------------------------------------------------\n1 ' + list[0].name + ' | ' + list[0].amount + ' | ' + list[0].unitPrice/100 + ' Eur' + '      | ' +  (list[0].amount * list[0].unitPrice/100).toFixed(2) + ' Eur\n2 ' + list[1].name + '   | ' + list[1].amount + ' vnt   | ' + list[1].unitPrice/100 + ' Eur' + '       | ' +  (list[1].amount * list[1].unitPrice/100).toFixed(2) + ' Eur\n3 ' + list[2].name + '  | ' + list[2].amount + ' vnt   | ' + list[2].unitPrice/100 + ' Eur' + '      | ' +  (list[2].amount * list[2].unitPrice/100).toFixed(2) + ' Eur\n-----------------------------------------------------------');


    }
}



