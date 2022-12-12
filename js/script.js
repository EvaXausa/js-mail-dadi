/*
1- Genero un numero random da 1 a 6, per il giocatore.
2- Genero un numero random da 1 a 6, per il computer.
3- Stabilisco il vincitore, in base a chi fa il punteggio più alto.
4- Stampo in pagina i due tiri e il risultato.
*/

const random = Math.random();

//Genero un numero random da 1 a 6 per il giocatore

const user = Math.floor(random * 6) + 1;
console.log("result user: " + user);

//Genero un numero random da 1 a 6 per il giocatore
const cpu = Math.floor(random * 6) + 1;
console.log("result cpu: " + cpu);

//Stabilisco il vincitore, in base a chi fa il punteggio più alto
/*if (result user > result cpu  ){
const result
} else if (result user < result cpu) {

}else{

}
*/

//Stampo in pagina i due tiri e il risultato. TO DO
/*
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
const email = [];
