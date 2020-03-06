console.log('Break: ');
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums1.length; i++) {
  console.log(nums1[i]);

  if (nums1[i] === 5) {
    break;
  }
}

console.log('Continue: ');
let nums2 = [1, -2, 3, -4, 5, 6, -7, 8, -9, 10];
for (let i = 0; i < nums1.length; i++) {
  if (nums1[i] < 0) {
    continue;
  }

  console.log(nums1[i]);
}
