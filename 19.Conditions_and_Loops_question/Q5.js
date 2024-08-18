// In Ascending Order
let i = 1;
let numsInc = [];
while (i<=25) {
    numsInc[i-1] = i;
    i++;
}
console.log(`In Ascending Order: ${numsInc}`)

// In Descending Order
let j = 25;
let numsDec = [];
while (j >= 1) {
    numsDec[25-j] = j;
    j--;
}
console.log(`In Descending Order: ${numsDec}`);