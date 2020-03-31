function evenify(args) {
  let result;
  if (args % 2 == 0) {
    result = args;
  } else {
    result = args * 2;
  }
  return result;
}

// const result = evenify(13);
// console.log('result: ', result);

function loop(args) {
  let even_arr = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    let result = evenify(arg);
    even_arr.push(result);
  }

  return even_arr;
}

const nums = [21, 55, 62, 82, 55];
const num = loop(nums);
console.log(num);
