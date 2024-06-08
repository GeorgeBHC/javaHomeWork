// Operatori aritmetici

let num1 = 1;
let num2 = 2;

let suma = num1 + num2;

console.log('Rezultat adunare: ' + suma);

let num11 = 11;
let num22 = 22;
let num33 = 33;

let suma2 = num11 + num22 + num33;

let medie = suma2 / 3;

console.log('Media celor 3 numere este:' + medie);

// Operatori de atribuire 

let x = 15;
x += 5;
console.log('Valorea lui x este:' +x);

let y = 10;
y += 2;
console.log('Valoare lui y este:' +y);

// Operatori de comparare

let numA = 7;
let numB = 2;

if(numA > numB) {
    console.log('A este mai mare decat B');
} else {
    console.log('B este mai mare sau egal cu A');
}

let varsta= 18;

if(varsta >= 18) {
    console.log('Poti da de permis');
} else {
    console.log('Nu poti da de permis')
}

//Operatori logici

let conditie1 = true;
let conditie2 = true;

if(conditie1 && conditie2) {
    console.log('Ambele conditii sunt adevarate');
} else {
    console.log('O conditie nu este adevarata');
}

let conditie3 = false;

if(!conditie3) {
    console.log('Conditia nu e adevarata');
} else {
    console.log('Conditia e adevarata');
}