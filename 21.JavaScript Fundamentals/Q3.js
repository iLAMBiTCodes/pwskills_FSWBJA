function findMatchReturn(pattern, str) {
    const regExp = new RegExp(pattern, 'g');
    const matches = str.match(regExp);
    return matches || [];
}
const testCases = [
    { pattern: '\\d', str: 'Hello 123, this is test 456!' },
    { pattern: '[A-Z]', str: 'Hello World! This Is A Test.' },
    { pattern: '[a-z]', str: 'Hello World! This Is A Test.' },
    { pattern: '[^a-zA-Z0-9]', str: 'Hello@# World$%^ This&* Is( A) Test!' },
];
testCases.forEach((obj, index) => {
    const matches = findMatchReturn(obj.pattern, obj.str);
    console.log(`Match: ${matches.join(', ')}`);
});