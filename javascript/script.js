var bill = parseFloat(prompt("Enter the Bill amount"));
var tipPercent = parseFloat(prompt("Enter the percentage to tip"));

var tipAmount = (bill * tipPercent) / 100;
var totalBill = bill + tipAmount;

alert(totalBill.toFixed(2))