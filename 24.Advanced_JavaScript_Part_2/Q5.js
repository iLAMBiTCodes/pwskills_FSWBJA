// polyfill for Array.includes

function customIncludes(arr, targetElement, fromIndex){
    if(fromIndex){
        for(let i = fromIndex; i < arr.length; i++) {
            if(arr[i] === targetElement) return true;
        }
        return false;
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === targetElement) return true;
        }
        return false;
    }
};
// Test
const myArr = [1, 2, 4, "Hello"];
console.log(customIncludes(myArr, 2));
console.log(customIncludes(myArr, 2, 2));
console.log(customIncludes(myArr, "Hello"));