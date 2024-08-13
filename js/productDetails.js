
export function productDetails(list, id) {


if ((list.length) === 0) {
return `Prekė, su ID: ${id} neegzistuoja. Krepšelis yra tuščias`;
} else if (!Number.isInteger(id)) {
    return  'Erorr: Įveskite sveikajį skaičiu';

} else if ((list[0].id) === id){
    return('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + list[0].id + '\nPavadinimas   | ' + list[0].name + '\nKiekis        | '
     + list[0].amount + ' vnt\nVieneto kaina | ' +  list[0].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[0].amount * list[0].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 
     
} else if ((list[1].id) === id) {
    return ('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + list[1].id + '\nPavadinimas   | ' + list[1].name + '\nKiekis        | '
            + list[1].amount + ' vnt\nVieneto kaina | ' +  list[1].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[1].amount * list[1].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 

} else if ((list[2].id) === id) {
    return ('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + list[2].id + '\nPavadinimas   | ' + list[2].name + '\nKiekis        | '
        + list[2].amount + ' vnt\nVieneto kaina | ' +  list[2].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[2].amount * list[2].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 
        }

    return (`Prekė, su ID: ${id} neegzistuoja.`);
}




