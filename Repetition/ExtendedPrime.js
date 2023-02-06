//Q4. Extend the program to take a range of number as input and output
//the PrimeNumbers in that range.

let start = 3;
let end = 17;
let flag =0;
for (let i = start; i <= end; i++) {
    flag =0;
    for(let j = 2;j<i;j++){
        if(i%j==0){
            flag=1;
        }
    }
    if(flag==0){
        console.log(i)
    }     
}

