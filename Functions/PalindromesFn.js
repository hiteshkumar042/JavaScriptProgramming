//Q2. Write a function to check if the two numbers are Palindromes

let rem;
let rev=0;
let input = 12321;
let result = CheckPalindrome(input);
if(input==result){
    console.log("Number is Palindrom")
}else{
    console.log("Number is not a Palindrom")
}

function CheckPalindrome(num) {
    while(num>0){
        rem = num%10;
        rev = (rev*10)+rem;
        num =  Math.floor(num/10);
    }
    return rev;
}


