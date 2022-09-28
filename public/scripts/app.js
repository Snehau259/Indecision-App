'use strict';

var square = function square(x) {
  return x * x;
};
console.log(square(8));

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(squareArrow(9));

var squareArrowPrecise = function squareArrowPrecise(x) {
  return x * x;
};
console.log(squareArrowPrecise(10));

var getFirstName = function getFirstName(fullname) {
  return fullname.split(' ')[0];
};
console.log(getFirstName("Sneha U"));

var getFirstName2 = function getFirstName2(fullname) {
  fullname.split(' ')[0];
};
console.log(getFirstName("Sneha U"));
