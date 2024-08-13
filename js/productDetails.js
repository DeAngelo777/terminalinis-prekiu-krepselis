
export function productDetails(list, id) {


if ((Object.keys(list).length) === 0) {
return `Prekė, su ID: ${id} neegzistuoja. Krepšelis yra tuščias`;
} else if (!Number.isInteger(id)) {
    return  'Erorr: Įveskite sveikajį skaičiu';

} else if ((list[0].id) === id){
    return('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + list[0].id + '\nPavadinimas   | ' + list[0].name + '\nKiekis        | '
     + list[0].amount + ' vnt\nVieneto kaina | ' +  list[0].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[0].amount * list[0].unitPrice/100).toFixed(2) + ' Eur\n------------------------------'); 
    } else { 
     
    return (`Prekė, su ID: ${id} neegzistuoja.`);
}
}