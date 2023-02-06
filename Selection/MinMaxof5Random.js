//Write a program that reads 5 Random 3 Digit values and then outputs the minimum
//and the maximum value

let num1 = Math.floor(Math.random() *900+100);
let num2 = Math.floor(Math.random() *900+100);
let num3 = Math.floor(Math.random() *900+100);
let num4 = Math.floor(Math.random() *900+100);
let num5 = Math.floor(Math.random() *900+100);

console.log(num1, num2, num3, num4, num5);

if(num1>num2&&num1>num3&&num1>num4&&num1>num5){
    console.log("max is :"+num1)
}
if(num2>num1&&num2>num3&&num2>num4&&num2>num5){
    console.log("max is :"+num2)
}
if(num3>num1&&num3>num2&&num3>num4&&num3>num5){
    console.log("max is :"+num3)
}
if(num4>num1&&num4>num2&&num4>num3&&num4>num5){
    console.log("max is :"+num4)
}
if(num5>num1&&num5>num2&&num5>num3&&num5>num4){
    console.log("max is :"+num5)
}

//Find Minimum
if(num1<num2&&num1<num3&&num1<num4&&num1<num5){
    console.log("min is :"+num1)
}
if(num2<num1&&num2<num3&&num2<num4&&num2<num5){
    console.log("min is :"+num2)
}
if(num3<num1&&num3<num2&&num3<num4&&num3<num5){
    console.log("min is :"+num3)
}
if(num4<num1&&num4<num2&&num4<num3&&num4<num5){
    console.log("min is :"+num4)
}
if(num5<num1&&num5<num2&&num5<num3&&num5<num4){
    console.log("min is :"+num5)
}