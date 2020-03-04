// Normal
let arr1 = [2, 9, 23, 9, 105, 77, 86];
let arrSqr = [];
for (let i = 0; i < arr1.length; i++) {
  let element = arr1[i];
  let output = element * element;
  arrSqr.push(output);
}
console.log(arrSqr);

// Map
let arr2 = [2, 9, 5, 213, 91, 53, 72, 84];
let output = arr2.map(x => x * x);
console.log(output);

// Filter
let filt = arr1.filter(x => x > 23);
console.log(filt);

// Reduce
