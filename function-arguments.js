function addNumbers(num1, num2, ...num) {
  console.log(arguments);
  console.log(num1, num2, num);
  return num1 + num2 + num;
}
const add = addNumbers(5, 6, 2);
console.log(add);
