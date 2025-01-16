/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const areaRettangolo = function (l1, l2) {
    return l1 * l2
}

console.log(areaRettangolo(3, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
    let result;
    if (n1 === n2) {
        result = (n1 + n2) * 3
    } else {
        result = n1 + n2
    }
    return result
}
console.log(crazySum(2, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n) {
    let result;
    if (n <= 19) {
        result = Math.abs(n - 19);
    } else {
        result = Math.abs(n - 19) * 3;
    }
    return result
}
console.log(crazyDiff(18))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
    let result
    if (n >= 20 && n <= 100 || n === 400) {
        result = true
    } else {
        result = false
    }
    return result
}
console.log(boundary(50))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
    let result;
    let verifyString = 'Epicode '
    if (string.startsWith(verifyString)) {
        result = string
    } else {
        result = verifyString + string
    }
    return result
}
console.log(epify('Epicode'))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n){
    let result;
    if (n % 3 ===0 || n % 7 ===0){
        console.log(`Il numero ${n} è un multiplo di 3 o 7`)
        result = true;
    }else{
        console.log(`Il numero ${n} non è un multiplo di 3 o 7`)
        result = false;
    }
    return result
}
console.log(check3and7(5))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]
    }
    return result
}
console.log(reverseString('Epicode'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst =  function(string){
    let arrayOfString=[];
    let stringSplit= string.split(' ');
    for(let i=0; i<stringSplit.length; i++){
        arrayOfString.push(stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1))
    }
    return arrayOfString.join(' ')
}
console.log(upperFirst('ciao a tutti sono Aldo'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
return string.slice(1,  - 1);
}
console.log(cutString('Aldo'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * 11))
    }
    return result
}
console.log(giveMeRandom(5))
