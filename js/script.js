console.log('OK JS');

/*
! Scrivere un programma che chieda all’utente:
! Il numero di chilometri da percorrere
! Età del passeggero
!Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
! il prezzo del biglietto è definito in base ai km (0.21 € al km)
! va applicato uno sconto del 20% per i minorenni
! va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Prendo gli imput dal DOM  
let kmRoute = document.getElementById('km-route');
let age = document.getElementById('userAge');
const button = document.getElementById('button-gen');


const userAge = parseInt(age.value);



// Aggancio l'event listener al bottone
button.addEventListener('click', function (){   
    // Prendo l'interno del contenuto dell'input 
    let kms = parseInt(kmRoute.value);

    // Calcolo il prezzo del biglietto    
    let ticketPrice = kms * 0.21;
    let rounded = ticketPrice.toFixed(2) + '€';
    console.log(rounded);
}); 





// if (userAge < 18) {
//     let finalPrice = (ticketPrice - ((ticketPrice * 20) / 100));
//     console.log(finalPrice.toFixed(2) + '€');
// } else if (userAge > 65) {
//     let finalPrice = (ticketPrice - ((ticketPrice * 40) / 100));
//     console.log(finalPrice.toFixed(2) + '€');
// }