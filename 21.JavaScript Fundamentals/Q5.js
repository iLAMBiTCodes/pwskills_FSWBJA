function shippingTime(packageType) {

    switch (true) {
        case packageType === "standard":
            console.log("Estimated Deivery Time: 3-5 Days");
            break;
        case packageType === "express":
            console.log("Estimated Deivery Time: 1-2 Days");
            break;
        case packageType === "overnight":
            console.log("Estimated Deivery Time: Next Day");
            break;
        default:
            console.log("Enter a valid package type");
            break;
    }
}
shippingTime("standard");