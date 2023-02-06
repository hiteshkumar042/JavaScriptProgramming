//Q4. 5 Random 2 digit number, find sum and average
console.log("First Method");
let random1= Math.floor(Math.random()*90+10);
let random2= Math.floor(Math.random()*90+10);
let random3= Math.floor(Math.random()*90+10);
let random4= Math.floor(Math.random()*90+10);
let random5= Math.floor(Math.random()*90+10);
let sumOfRandom= random1+random2+random3+random4+random5;
let AvgOfrandom = sumOfRandom/5;
console.log("Sum of 5 random 2 Digit Number is  : "+ sumOfRandom);
console.log("Avg of 5 random 2 Digit Number is  : "+ AvgOfrandom);

//***********************************/

console.log("Second Method");
let sum=0;
for(let i=1;i<=5;i++){
    sum = sum+(Math.floor(Math.random()*90+10));
}
console.log("Sum of 5 random 2 Digit Number is  : "+ sum);
console.log("Avg of 5 random 2 Digit Number is  : "+ sum/5);