// Consegna: Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. 

const numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const redText = document.createElement("div");
const greenText = document.createElement("div");
redText.setAttribute("id", "odd-numbers");
greenText.setAttribute("id", "even-numbers");


for (let i = 0; i < numList.length; i++) {
    if (numList[i] % 2 !== 0) {
        greenText.innerHTML += `${numList[i]} `;
    } else {
        redText.innerHTML += `${numList[i]} `;
    }
}

document.body.append(redText);
document.body.append(greenText);