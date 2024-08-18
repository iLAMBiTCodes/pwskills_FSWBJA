const num1 = 92;
const num2 = 1000;
// Using for loop
for (let i = num1 + 1; i < num2; i++) {
    console.log(i);
}
// Output:
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19

// Using arrays to store it
let numsBetween = [];
for (let i = num1 + 1; i < num2; i++) {
    numsBetween[i - num1 - 1] = i;
}
// console.log(numsBetween.join(", "));
console.log(`The numbers between ${num1} and ${num2} are ${numsBetween}`);