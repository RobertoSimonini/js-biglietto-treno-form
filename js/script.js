console.log('OK JS');

/*
? Scrivere un programma che chieda all’utente:
? Il numero di chilometri da percorrere
? Età del passeggero
?Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
? il prezzo del biglietto è definito in base ai km (0.21 € al km)
? va applicato uno sconto del 20% per i minorenni
? va applicato uno sconto del 40% per gli over 65.
*/

// Prendo gli elementi dal Form  

const elementName = document.getElementById('username');
const elementKms = document.getElementById('kms');
const elementAge = document.getElementById('age');
const calculateButton = document.getElementById('calc-button');

// Prendo gli elementi dal ticekt 

const ticketSection = document.getElementById('ticket-infos');
const elementPassengerName = document.getElementById('your-name');
const elementRate = document.getElementById('rate');
const elementCoach = document.getElementById('coach');
const elementPrice = document.getElementById('price');

// Ora metto l'event listener al Button 

calculateButton.addEventListener("click", function(){

    // Recupero i valori interni agli input 
    const nameValue = elementName.value.trim();
    const kmsValue = parseInt(elementKms.value.trim());
    const ageValue = elementAge.value;

    // ! Validation

    if (!nameValue || isNaN(kmsValue) || kmsValue < 1) {
        alert('Insert Valid Values!!');
        return;   
    }
    
    // Calcolo del prezzo del ticket senza sconti 
    let rate;
    let price = 0.21 * kmsValue;
    rate = 'Ordinary rate';
    
    // Calcolo gli eventuali sconti dei ticekt 

    if (ageValue === 'underage') {
        price *= 0.8;
        rate = 'Discounted rate Underage';

    } else if (ageValue === 'Over-65') {
         price *= 0.6;
         rate = 'Discounted rate over-65';
    }

    // Arrotondo a 2 decimali il prezzo

    price = price.toFixed(2) + '€';
    console.log(price);

    // Creao la variabile  per il numero di carrozza 

    let coach = Math.floor(Math.random() * (10000 - 9000 + 1)) - 1;

    // Stampo gli elementi nel biglietto in pagina 

    elementPassengerName.innerText = nameValue;
    elementRate.innerText = rate;
    elementCoach.innerText = coach;
    elementPrice.innerText = price;

    // Rimuovo il Display none dal ticekt 

    ticketSection.classList.remove('d-none');

    
});