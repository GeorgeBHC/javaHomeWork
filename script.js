// Operatori aritmetici

let numberOne = 1;
let numberTwo = 2;

let sum = numberOne + numberTwo;

console.log('Rezultat adunare: ' + sum);

let numOne1 = 11;
let numTwo2 = 22;
let numThree3 = 33;

let sum2 = numOne1 + numTwo2 + numThree3;

let average = sum2 / 3;

console.log('Media celor 3 numere este:' + average);

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

let age= 18;

if(age >= 18) {
    console.log('Poti da de permis');
} else {
    console.log('Nu poti da de permis')
}

//Operatori logici

let condition1 = true;
let condition2 = true;

if(condition1 && condition2) {
    console.log('Ambele conditii sunt adevarate');
} else {
    console.log('O conditie nu este adevarata');
}

let condition3 = false;

if(!condition3) {
    console.log('Conditia nu e adevarata');
} else {
    console.log('Conditia e adevarata');
}

//Bucla do-while

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 10);

//Bucla for 

for (let i = 0; i <= 20; i++) {
   if (i % 2 === 0) {
    console.log(i);
   }
}

let num3 = parseInt(prompt("Introdu primul numar:"));
let num4 = parseInt(prompt("Introdu al doilea numar:"));


for (let i= num3; i <= num4; i++) {
 console.log(i);
}

let num = parseInt(prompt("Introduceti un numar:"))

console.log("Tabla inmultirii pentru" + num + ":");
for (let i= 1; i <= 10; i++) {
    console.log(num + "x" + i + "=" +(num * i));
}