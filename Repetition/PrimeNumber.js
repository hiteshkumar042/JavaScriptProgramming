//Q3. Prime Number

let input =4;
let count =0;
for(let i=2; i<input;i++){
    if(input%i==0){
        count++;
        break;
    }
}
if(count>0){
    console.log("Not a Prime number")
}
else{
    console.log("Prime number")
}