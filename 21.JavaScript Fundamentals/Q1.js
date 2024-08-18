function outerFunction(x) {
    let y = 10;
    function innerFunction() {
        return x + y;
    }
    return innerFunction;
}
const result = outerFunction(30);
console.log(result()); //40

/*Explanantion:
outerFunction takes one parameter x and we have defined a local variable y with value 10 in the scope of outerFunction.
The innerFunction gains the access of x and y, when it is defined and it also remembers from the scope in which it is defined, even after the execution of outerFunction completes.
 */

