// Payment Approved
const paymentStatus1 = "APPROVED";

if (paymentStatus1 === "APPROVED") {
  console.log("Payment successful! Thank you for your purchase.");
} else {
  console.log("Payment failed. Please try again.");
}

// Payment Pending
const paymentStatus2 = "PENDING";

if (paymentStatus2 === "APPROVED") {
  console.log("Payment successful! Thank you for your purchase.");
} else if (paymentStatus2 === "PENDING") {
  console.log("Payment is pending. Please wait for confirmation.");
} else {
  console.log("Payment failed. Please try again.");
}

// Payment Declined
const paymentStatus3 = "DECLINED";

if (paymentStatus3 === "APPROVED") {
  console.log("Payment successful! Thank you for your purchase.");
} else if (paymentStatus3 === "PENDING") {
  console.log("Payment is pending. Please wait for confirmation.");
} else {
  console.log("Payment declined. Please try again.");
}