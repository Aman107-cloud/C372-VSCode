const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

// Display Chester's payment status
for (const payment of payments) {
    if (payment.petName === "Chester") {
        console.log("Chester's payment status: " + payment.status);
        console.log("Pet-care services for chester confirmed.");
    }
}

// Display Mochi's payment status
for (const payment of payments) {
    if (payment.petName === "Mochi") {
        console.log("Mochi's payment status: " + payment.status);
        console.log("Payment for mochi is being processed.");
    }
}

// Display Mira's payment status
for (const payment of payments) {
    if (payment.petName === "Mira") {
        console.log("Mira's payment status: " + payment.status);
        console.log("Payment for mira unsuccessful.");
    }
}


// Display payment details for each pet
for (const payment of payments) {
    console.log(
        "Pet: " + payment.petName +
        ", Amount: $" + payment.amount +
        ", Status: " + payment.status
    );
}