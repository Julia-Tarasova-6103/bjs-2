"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let y;
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    x = (- b + Math.sqrt(d)) / (2 *a);
    y = (- b - Math.sqrt(d)) / (2 *a);
    arr.push(x, y);
  } else if (d === 0) {
    x = - b / (2 * a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mainSum = amount - contribution;
  let percentPerMonth = percent / 100 / 12;

  let paymentPerMonth = mainSum * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  let totalSum = paymentPerMonth * countMonths;
  let finalSum = Number(totalSum.toFixed(2))

  return finalSum;
}