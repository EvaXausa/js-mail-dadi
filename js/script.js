/*
1- Genero un numero random da 1 a 6, per il giocatore.
2- Genero un numero random da 1 a 6, per il computer.
3- Stabilisco il vincitore, in base a chi fa il punteggio più alto.
4- Stampo in pagina i due tiri e il risultato.
*/

//Prendo l'elemento in pagina
const resultElement = ducument.getElementById("result");
//Genero un numero random da 1 a 6 per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
//Genero un numero random da 1 a 6 per il computer
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, cpuNumber);

//Stabilisco il vincitore, in base a chi fa il punteggio più alto
let message = "pareggio";

if (userNumber > cpuNumber) {
  message = "Ha vinto il giocatore";
} else if (userNumber < cpuNumber) {
  message = "Ha vinto il computer";
}

console.log(message);
resultElement.innerHTML = `
<div>Tiro del computer: <strong>${userNumber}</strong></div>
<div>Tiro del giocatore: <strong>${userNumber}</strong></div>'
<h3>${message}</h3>
`;

//Stampo in pagina i due tiri e il risultato. TO DO
/*
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
