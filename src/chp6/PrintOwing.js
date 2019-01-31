function printBanner(console) {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

export function printOwing(invoice, console, clock) {
    printBanner(console);

    // calculate outstanding
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // record due date
    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printDetails(invoice, outstanding, console);


}