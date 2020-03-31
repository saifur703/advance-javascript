let nums = [12, 99, 87, 20, 46, 91, 62];
loop(nums);

let friends = [12, 98, 54, 21, 100, 52, 66, 73, 77];
loop(friends);

function evenify(args) {
  if (args % 2 == 0) {
    console.log(args, ' is Even Number');
  } else {
    console.log(args, ' is Odd Number');
  }
}
function loop(args) {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    evenify(arg);
  }
}
