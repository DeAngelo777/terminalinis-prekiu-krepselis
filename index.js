
/*
--------------------------------------------------------
KOMENTARAS:

Tolimesnis kodas, šiame faile, neredaguojamas!

Komentarai po console.log(), kuriuose iškviečiamos funkcijos rodo norimą terminale matyti rezultatą, kuris privalo būti identiškas pateiktam.

Vienintelė išimtis, kada gali nesutapti spausdinamas rezultatas, jei kurdamas užduotį palikau skaičiavimo klaidą... tai jo... reikėtų suskaičiuoti teisingai 👍
--------------------------------------------------------
*/

const emptyList = [];

// console.log(shoppingList(emptyList));
/*
Šiuo metu, jūsų prekių krepšelis yra tuščias.
*/



// console.log(productDetails(emptyList, 42069));
/*
Prekė, su ID: 42069 neegzistuoja.
*/

const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];




/*
Prekė, su ID: 42069 neegzistuoja.
*/

// Padaryta
// console.log(firstShoppingList.length);
// console.log(firstShoppingList[0].name);
// console.log();
// function shoppingList(list,id){

//     console.log('Jūsų prekių krepšelyje yra ' + list.length + ' prekes');
//     console.log(`-----------------------------------------------------------`);
// console.log('Pavadinimas | Kiekis  | Vieneto kaina | Viso mokėti');
//     console.log(`-----------------------------------------------------------`);
//     console.log('1 ' + list[0].name + ' | ' + list[0].amount + ' | ' + list[0].unitPrice/100 + ' Eur' + '      | ' +  (list[0].amount * list[0].unitPrice/100).toFixed(2) + ' Eur');
//     console.log('2 ' + list[1].name + '   | ' + list[1].amount + ' vnt   | ' + list[1].unitPrice/100 + ' Eur' + '       | ' +  (list[1].amount * list[1].unitPrice/100).toFixed(2) + ' Eur');
//     console.log('3 ' + list[2].name + '  | ' + list[2].amount + ' vnt   | ' + list[2].unitPrice/100 + ' Eur' + '      | ' +  (list[2].amount * list[2].unitPrice/100).toFixed(2) + ' Eur');
//     console.log(`-----------------------------------------------------------`);
// console.log();
// }


// console.log(shoppingList(firstShoppingList));
/*
Jūsų prekių krepšelyje yra 3 prekės:
-----------------------------------------------------------
Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
-----------------------------------------------------------
1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur
2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur
3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur
-----------------------------------------------------------
*/


// Prekės informacija
// ------------------------------
// ID            | 1
// Pavadinimas   | Pomidoras
// Kiekis        | 1000000 vnt
// Vieneto kaina | 1.99 Eur
// Viso mokėti   | 1990000.00 Eur
// ------------------------------
// */


// function productDetails(list, id) {
// if ((list[0].id) === id) {
// return ('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + firstShoppingList[0].id + '\nPavadinimas   | ' + firstShoppingList[0].name + '\nKiekis        | '
//      + firstShoppingList[0].amount + ' vnt\nVieneto kaina | ' +  firstShoppingList[0].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[0].amount * list[0].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 


    
//       } else if ((list[1].id) === id) {
//         return ('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + firstShoppingList[1].id + '\nPavadinimas   | ' + firstShoppingList[1].name + '\nKiekis        | '
//             + firstShoppingList[1].amount + ' vnt\nVieneto kaina | ' +  firstShoppingList[1].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[1].amount * list[1].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 
            



// } 




// else if ((list[2].id) === id) {
//     return ('------------------------------\nPrekės informacija\n------------------------------\nID            | ' + firstShoppingList[2].id + '\nPavadinimas   | ' + firstShoppingList[2].name + '\nKiekis        | '
//         + firstShoppingList[2].amount + ' vnt\nVieneto kaina | ' +  firstShoppingList[2].unitPrice/100 + ' Eur\nViso mokėti   | ' + (list[2].amount * list[2].unitPrice/100).toFixed(2) + ' Eur\n------------------------------') 
        



// } 
    
    
//     else {
//         console.log(`Prekė, su ID: ${id} neegzistuoja.`);
//       }
//     }
// console.log(productDetails(firstShoppingList, 7));
/*
------------------------------
Prekės informacija
------------------------------
ID            | 1
Pavadinimas   | Pomidoras
Kiekis        | 1000000 vnt
Vieneto kaina | 1.99 Eur
Viso mokėti   | 1990000.00 Eur
------------------------------
*/

// console.log(productDetails(firstShoppingList, 3));
/*
------------------------
Prekės informacija
------------------------
ID            | 3
Pavadinimas   | Agurkas
Kiekis        | 2 vnt
Vieneto kaina | 0.50 Eur
Viso mokėti   | 1.00 Eur
------------------------
*/

// console.log(productDetails(firstShoppingList, 7));
/*
------------------------
Prekės informacija
------------------------
ID            | 7
Pavadinimas   | Svogūnas
Kiekis        | 1 vnt
Vieneto kaina | 0.45 Eur
Viso mokėti   | 0.45 Eur
------------------------
*/

const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];

// console.log(shoppingList(singleProductShoppingList));
/*
Jūsų prekių krepšelyje yra 1 prekė:
--------------------------------------------------
Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti
--------------------------------------------------
1. Kivi     | 23 vnt | 0.14 Eur      | 3.22 Eur
--------------------------------------------------
*/

// console.log(productDetails(singleProductShoppingList, 42069));
/*
Prekė, su ID: 42069 neegzistuoja.
*/

// console.log(productDetails(singleProductShoppingList, 2));
/*
------------------------
Prekės informacija
------------------------
ID            | 2
Pavadinimas   | Kivi
Kiekis        | 23 vnt
Vieneto kaina | 0.14 Eur
Viso mokėti   | 3.22 Eur
------------------------
*/