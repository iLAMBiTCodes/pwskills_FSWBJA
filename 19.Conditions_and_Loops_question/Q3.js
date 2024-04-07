/*
In JavaScript, loops are used to repeatedly execute a block of code until a certain condition is met. Loops helps us to prevent writing a block of code multiple times.
The different types of loops are explained below:
1.for loop: The for loop is used when we know that number of iterations to be performed in advance. It consists of three parts: initialization, condition, and increment/decrement.
Syntax:
for (initialization; condition; increment/decrement) {
  // code to be executed
}
Example:
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4 5

2.while loop: The Wild Loop is used when we don't know the number of iterations in advance. It repeatedly executes a block of code as long as the specified condition is true.
Syntax:
while (condition) {
  // code to be executed
}
Example:
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4 5

3.do-while loop: The do while look is similar to do-while loop, but it executes the code at least once before checking the condition.
Syntax:
do {
  // code to be executed
} while (condition);
Example: 
let i = 0;
do {
    console.log(i);
    i++;
} while (i<=5);
// Output: 0 1 2 3 4 5

4.For ..in Loop: The for...in loop is used to iterate over the properties of an object. It assigns each property key to a variable.
Syntax:
for (variable in object) {
  // code to be executed
}
Example:
const nums = [9, 8, 1, 10];
for (let i in nums) {
  console.log(nums[i]);
}
// Output:
// 9
// 8
// 1
// 10

5.For ..of Loop: It iterates over the values of the iterable in the order they appear. It does not provide access to the index or key of each element.
for (variable of iterable) {
  // code to be executed
}
Example:
const nums = [9, 8, 1, 10];
for (let i of nums) {
  console.log(i);
}
// Output:
// 9
// 8
// 1
// 10
*/