function explain_clallback(name, age, task) {
  console.log(name);
  console.log(age);
  task();
}

explain_clallback('Saifur', 24, washHand);
explain_clallback('Mamun', 15, takeShower);
explain_clallback('Akash', 12, dosomething);

function takeShower() {
  console.log('Take Shower');
}
function washHand() {
  console.log('Wash Your Hand');
}
function dosomething() {
  console.log('Spend time using FB');
}
