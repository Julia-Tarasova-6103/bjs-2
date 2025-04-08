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
  let arr2 = [];
  let mainSum = amount - contribution;
  let percentMonth = ((1 + percent / 100) ** 1 / 12 - 1) * 100;

  let paymentPerMonth = mainSum * (percentMonth + (percentMonth / (((1 + percentMonth) ** n) - 1)));
  let totalSum = contribution + paymentPerMonth * countMonths;
  arr2.push(totalSum.toFixed(2));

  return arr2;
}