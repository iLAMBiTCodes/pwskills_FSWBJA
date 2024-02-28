// Ternary Opeartor: Ternary operator(?), also known as conditional operator, is a compact way to write conditional statements in JavaScript. As the name says it takes three operands, first operand is a condition write before the ternary operator(?) and second and third operands are codes or expression to be executed respectively based on the condition of true and false. the second and third operands are separated by colon(:)
// Syntax: condition ? <Executeiftrue> : <Executeiffalse>

// Program to check whether a number is odd or even
// We know that when a number is even it is divisible by 2 and the remainder is zero and when a number is odd it is not divisible by 2 and hence the remainder is not zero.

const myNumber = 11;
(myNumber%2) == 0 ? console.log(`${myNumber} is even`) : console.log(`${myNumber} is odd`)
