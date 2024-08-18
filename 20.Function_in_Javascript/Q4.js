function calculateTax(income) {
    let taxValue = 0;
    switch (true) {
        case income > 1500000:
            taxValue = 0.3 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 1200000:
            taxValue = 0.2 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 1000000:
            taxValue = 0.15 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 900000:
            taxValue = 0.15 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 600000:
            taxValue = 0.1 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 500000:
            taxValue = 0.05 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 300000:
            taxValue = 0.05 * income;
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income > 250000:
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;
        case income <= 250000:
            console.log(`Income: Rs. ${income} | Tax(${(taxValue / income) * 100}%): Rs. ${taxValue}`);
            break;

        default:
            console.log("Please enter income in numbers, without commas");
            break;
    }
}

calculateTax(Math.floor(Math.random()*10000000));