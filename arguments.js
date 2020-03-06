function add(a, b) {
  console.log([...arguments]);
  return a + b + arguments[2];
}
const result = add(5, 7, 2);
console.log(result);
