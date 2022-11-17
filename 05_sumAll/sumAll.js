const sumAll = function (sumFrom, sumTo) {
 if (sumFrom < 0 || typeof sumTo !== 'number') return 'ERROR';


 let sum = 0;
 let numberFrom = sumFrom;
 let numberTo = sumTo;

 if (sumFrom > sumTo) {
  numberFrom = sumTo;
  numberTo = sumFrom;
 }

 for (let i = numberFrom; i <= numberTo; i++) {
  sum += i;
 }
 return sum;
};
// Do not edit below this line
module.exports = sumAll;
