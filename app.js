console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i=1; i <= 100; i++) {
    if (i%2==1) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i=1; i <= 100; i++) {
    if (i%15==0) { console.log(`i: ${i} FIZZBUZZ`) }
    else if (i%5==0) { console.log(`i: ${i} BUZZ`) }
    else if (i%3==0) { console.log(`i: ${i} FIZZ`) }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("Repeat of exercise 1 with While Loop.");
let whilei = 1;
while (whilei<=100) {
    if (whilei%2==1) { console.log(whilei); }
    whilei++;
}

console.log("Repeat of exercise 1 with Do/While Loop.");
let doi = 1;
do {
    if (doi%2==1) { console.log(doi); }
    doi++;
} while (doi <= 100);

console.log("Repeat of exercise 2 with While Loop.");
let whilej = 1;
while (whilej <= 100) {
    if (whilej%15==0) { console.log(`j: ${whilej} FIZZBUZZ`); }
    else if (whilej%5==0) { console.log(`j: ${whilej} BUZZ`); }
    else if (whilej%3==0) { console.log(`j: ${whilej} FIZZ`); }
    whilej++;
}

console.log("Repeat of exercise 2 with Do/While Loop.");
let doj = 1;
do {
    if (doj%15==0) { console.log(`j: ${doj} FIZZBUZZ`); }
    else if (doj%5==0) { console.log(`j: ${doj} BUZZ`); }
    else if (doj%3==0) { console.log(`j: ${doj} FIZZ`); }
    doj++;
} while (doj <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
console.log("Creates a random number between 100 and 500 and tries to find it between 0 and 500.");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500-100) + 100); // creates a random number between 100 and 500
for (let i=0; i <= n; i++) {
    if (i==value) { console.log(`Found value!   Value: ${value}   n: ${n}`); break; }
    else if (i+1 > n) { console.log(`Did not find value!   Value: ${value}   n: ${n}`); }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
console.log("Customized FIZZBUZZ");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // number between 1 and 10
let num = Math.round(Math.random() * (1000 - 1) + 1); // number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // number between 1 and 10
console.log(`num: ${num}   start: ${start}`);
console.log(`FIZZ divisor: ${fizzDivisor}`);
console.log(`BUZZ divisor: ${buzzDivisor}`);
for (start; start <= num; start++) {
    if ( (start%fizzDivisor==0) & (start%buzzDivisor==0) ) {
        console.log(`FIZZBUZZ  start: ${start}`); 
    }
    else if (start%fizzDivisor==0) {
        console.log(`FIZZ  start: ${start}`);
    }
    else if (start%buzzDivisor==0) {
        console.log(`BUZZ  start: ${start}`)
    }
}