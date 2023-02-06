//Q3. Extend the Flip Coin problem 
// till either Heads or Tails wins 11 times.
let headCount = 0, tailCount = 0;
while (headCount != 11 && tailCount != 11) {
    let flipCoin = Math.floor((Math.random() * 10) % 2)
    if (flipCoin === 0) {
        console.log("Got Head")
        headCount++;
    }
    if (flipCoin === 1) {
        console.log("Got tail");
        tailCount++;
    }
}
console.log("Total Head : " + headCount)
console.log("Total Tail : " + tailCount)