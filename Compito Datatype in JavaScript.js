/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  
- Number: immagina di avere dei numeri per contare o fare calcoli, come 12 o 3.14.
- String: immagina di scrivere una parola o una frase racchiusa tra virgolette, come "Ciao!" o "Buongiorno!".
- Boolean: immagina di rispondere a una domanda con "sì" o "no". È come dire vero (`true`) o falso (`false`).
- Undefined: immagina di avere una scatola, ma non ci hai ancora messo niente dentro. È vuota, quindi è `undefined`.
- Null: immagina di avere una scatola e decidi tu che deve restare vuota, quindi dici che non contiene nulla (`null`).
- BigInt: immagina un numero così grande che non riesci nemmeno a contarlo con le dita o con una calcolatrice!
- Symbol: immagina di creare un’etichetta speciale, unica, per distinguere qualcosa dagli altri.
*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in JavaScript e come una scatola che contiene informazioni e azzioni colegate tra di loro. DataType oggetto consente di raggruppare proprietà e mettodi correlati in un'unica èntita. E una raccolta di coppie chiave-valore, dove le chiave sono un qualsiasi tipo di dato.    */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Alina";
console.log(nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* Mettodo 1 */
let num = 4;
console.log(num - x);

/*Mettodo 2 */
let sottrazione = 4 - x;
console.log(sottrazione);

/* 6 - Oggetto che mi rappresenta - Esercizio dal pdf */
let persona = {
    nome: "Alina",
    cognome: "Galben",
    hobby: ["leggere", "ballare", "viaggiare"]
}
console.log(persona);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let nome1 = "john";
let nome2 = "John";

/* compito 1 Verifico che name1 sia diverso da name2 */
console.log(nome1 !== nome2);

/* Compito 2 Verifico che la loro ugualianza diventi true se entrambe vengono trasformate in lowercase */
console.log(nome1.toLowerCase() === nome2.toLowerCase());
