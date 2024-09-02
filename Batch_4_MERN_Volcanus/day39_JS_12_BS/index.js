const binarySearch = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;
  let mid;

  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else if (arr[mid] < target) {
      s = mid + 1;
    }
  }
  return -1;
};

// main function
const arr = [10, 20, 30, 500, 750, 1200, 1900, 2400];
let target = 750;
const result = binarySearch(arr, target);
console.log(result);
