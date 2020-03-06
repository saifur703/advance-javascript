function sum(s1, s2) {
  const result = s1 + s2;
  return result;
}
console.log(sum(5, 5));

// Global Variable
var gvar = 100;
function abc() {
  console.log(gvar);
  let ab = 5;
}
abc();
// console.log(ab);
