const age = 40;
const ticketPrice = 800;
const isStudent = false;

if (age < 10) {
    console.log('free');
}
else if (isStudent) {
    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    const discount = ticketPrice * 15 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else {
    console.log(ticketPrice);
}
