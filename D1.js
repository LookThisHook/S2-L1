console.log("Il file D1.js è collegato correttamente!");

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
1. String: Un tipo di dato utilizzato per rappresentare il testo, delimitato da virgolette, come ad esempio "Ciao".
2. Number: Rappresenta valori numerici, inclusi interi e decimali, come 5, 3.14 o -10.
3. Boolean: Può assumere solo due valori: true (vero) o false (falso), spesso utilizzato per controlli logici.
4. Undefined: Indica che una variabile è stata dichiarata ma non ha ancora un valore assegnato.
5. Null: Rappresenta l'assenza intenzionale di un valore; è una variabile con un valore vuoto.
6. Object: Una collezione di proprietà e metodi; è un'entità complessa, come un oggetto del mondo reale con vari attributi.
7. Array: Una struttura dati che rappresenta una lista ordinata di valori, accessibili tramite indice numerico.
*/



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Luca" ; 
console.log(myName); 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 25 ;
let num2 = 10 ;
let somma =(num1+num2) ;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 ;
console.log(x) ;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

try {myName = "Giordano"; } catch (error) {console.log("Errore: non puoi riassegnare una costante."); console.log(error.message); }console.log(myName);

const myConstName = "Giordano";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x ;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "jhon" ;
let name2 = "Jhon" ;
console.log(name1 !== name2);

console.log(name1.toLowerCase() === name2.toLowerCase()); 
 