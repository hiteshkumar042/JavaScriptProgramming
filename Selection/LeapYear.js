//Q3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
//a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//divisible by 400.

let inputYear = 2023;
if(inputYear%400==0||(inputYear%4==0&&inputYear%100!=0)){
    console.log("Leap Year")
}else{
    console.log("Not a leap year")
}