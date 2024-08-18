
function testRegex(pattern, str) {
    const regEx = new RegExp(pattern);
    return regEx.test(str);
}
// Test:
const testCases = [
    {pattern: "h", str: "Hello hehe" },
    {pattern: "a{5}", str: "caandy"},
    {pattern: "[a-zA-Z]", str: "My name is agent 47"},
    {pattern: "[0-9]{10}", str: "909988827"},
    // {pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", str: "lambitdohotia@gmail.com"},
    // {pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", str: "lambitdohotia@gmailx.com"}
]
testCases.forEach(obj => {
    console.log(testRegex(obj.pattern, obj.str));
})