//Q5. Write a program that computes a 
//factorial of a number taken as input.

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log(fact);