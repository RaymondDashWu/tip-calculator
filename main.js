// Your scripts here

const n = Math.random() * 100;

console.log(n)
const m = n.toFixed(2)
console.log(m);
console.log(m * 2);
console.log(Number(m) + 3);
console.log(typeof m);
if (typeof m === 'string') {
  
} 

const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const calculate = document.getElementById('calculate');
const tip = document.getElementById('tip');
const total = document.getElementById('total');

calculate.addEventListener('click', function() {
    // get value of tip%
    const tipPercent = percent.value/100
    // get value of bill $
    const bill_amt = amount.value
    // calculate the tip amount
    tip.innerHTML = (bill_amt * tipPercent).toFixed(2)
    // converts to string***
    total.innerHTML = (bill_amt * (1 + tipPercent)).toFixed(2)
    // update with value 1 +value in tip%
})