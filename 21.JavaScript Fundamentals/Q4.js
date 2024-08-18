function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    if (match) {
        return {
            fullMatch: match[0],
            groups: match.slice(1)
        }
    } else {
        return null;
    }
}

const testCases = [
    {
        pattern: '(\\d{2})-(\\d{2})-(\\d{4})', 
        description: 'Date in DD-MM-YYYY format', 
        str: 'Today\'s date is 18-08-2024.',
    },
    {
        pattern: '(\\d{4})/(\\d{2})/(\\d{2})', 
        description: 'Date in YYYY/MM/DD format', 
        str: 'The event is on 2024/08/18.',
    },
    {
        pattern: '(\\d{2})/(\\d{2})/(\\d{2})', 
        description: 'Date in MM/DD/YY format', 
        str: 'The deadline is 08/18/24.',
    },
];

// Run test cases
testCases.forEach(({ pattern, description, str }, index) => {
    const result = extractGroups(pattern, str);
    if (result) {
        console.log(`Full Match: ${result.fullMatch}`);
        console.log(`Captured Groups: ${result.groups.join(', ')}`);
    } else {
        console.log('No match found.');
    }
});
