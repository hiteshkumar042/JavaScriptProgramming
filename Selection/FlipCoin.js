//Q.4 Write a program to simulate a coin flip and print out "Heads" or "Tails" 

let flipCoin= Math.floor(Math.random()*2);
if(flipCoin==1){
    console.log("Head");
}else{
    console.log("Tail");
}