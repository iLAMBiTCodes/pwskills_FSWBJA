/**
2. The following is an array of 10 students ages:

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two
Find the average age(all items divided by number of items
Find the range of the ages(max minus min
Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); //Sorts the original array
const [minInAges, maxInAges] = [ages[0], ages[ages.length - 1]];
console.log(`Minimum Age: ${minInAges}, Maximum Age: ${maxInAges}`);

if(ages.length % 2 == 0) {
    const median = (ages[ages.length/2 - 1] + ages[ages.length/2]) / 2;
    console.log("Median: ", median);
} else {
    const median = ages[Math.floor(ages.length/2)];
    console.log("Median: ", median);
}

const averageOfAges = ages.reduce((acc, curr) => {
    acc =  acc + curr/ages.length;
    return acc; 
}, 0);
console.log("Average: ", averageOfAges);

const rangeInAges = maxInAges - minInAges;
console.log("Range: ", rangeInAges);

const a = Math.abs(minInAges - averageOfAges);
const b = Math.abs(maxInAges - averageOfAges);
if(a > b) {
    console.log(`|Minimum - Average|: ${a} is greater than |Maximum - Average|: ${b}`);
} else if(a < b) {
    console.log(`|Minimum - Average|: ${a} is smaller than |Maximum - Average|: ${b}`);
} else {
    console.log(`|Minimum - Average|: ${a} is equal to |Maximum - Average|: ${b}`);
}