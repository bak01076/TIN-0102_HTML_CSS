const binarySearch = (number, arr) => {
  arr = arr.sort((a, b) => a - b);
  let l = 0,
    h = arr.length - 1,
    mid;
  while (l <= h) {
    mid = Math.floor((l + h) / 2);
    if (arr[mid] == number) return mid;
    else if (arr[mid] < number) l = mid + 1;
    else h = mid - 1;
  }
  return -1;
};

console.log(binarySearch(36, [11, 36, 15, 71, 12, 24]));
