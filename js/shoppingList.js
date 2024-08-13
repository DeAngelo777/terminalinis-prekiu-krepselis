export function shoppingList(list, id) {
    if (Object.keys(list).length === 0 ) {
        console.log('Šiuo metu, jūsų prekių krepšelis yra tuščias.')
    } else {

      
return ('Jūsų prekių krepšelyje yra ' + (Object.keys(list).length) + ' prekes\n-----------------------------------------------------------\nPavadinimas | Kiekis  | Vieneto kaina | Viso mokėti\n-----------------------------------------------------------\n1 ' + (list[0].name) + ' | ' + (list[0].amount) + ' | ' + (list[0].unitPrice/100) + ' Eur' + '      | ' +  ((list[0].amount) * ((list[0].unitPrice/100).toFixed(2))) + ' Eur\n2 ' + (list[0].name));
    }
}