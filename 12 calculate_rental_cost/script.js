/*
12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are
• Economy = Rs. 4000 /- per day.
• Midsize = Rs. 10,000 /- per day.
• Luxury = Rs. 20,000 /- per day.
*/

function calculateRentalCost(days, carType) {
    let rentalCost = 0;
    switch (carType) {
        case "Economy":
        rentalCost = 4000;
        break;
        case "Midsize":
        rentalCost = 10000;
        break;
        case "Luxury":
        rentalCost = 20000;
        break;
    }
    return rentalCost * days;
}
