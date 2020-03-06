let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let part = nums.slice(2, 5);
console.log(part);
console.log(nums);

let removed = nums.splice(2, 3, 99, 101);
console.log(removed);
console.log(nums);

let together = nums.join(', ');
console.log(together);
