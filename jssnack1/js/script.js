// Consegna: Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. 

// Procedimento: 

// 1) Creo un array vuoto
// 2) Attraverso un prompt chiedo all'utente un numero da inserire nell'array 
// 3) Utilizzo un ciclo do-while perchè mi permette di continuare a chiedere con il prompt i numeri al'utente fino a quando la condzione while non diventa falsa
// 4) Inserisco i numeri nell'array fino a quando la loro somma è minore di 50



// Array vuoto dove verranno pushati i numeri inseriti dall'utente
const listNumbers = [];

// Variabile per richiedere all'utente di inserire un numero compreso tra 0 e 50
let userNumbers;

// La somma di partenza è uguale a 0 
let sum = 0;

do {
    userNumbers = parseInt(prompt("Inserisci un numero da 0 a 50"));
    listNumbers.push(userNumbers);
    sum += userNumbers;
} while (sum < 50);
