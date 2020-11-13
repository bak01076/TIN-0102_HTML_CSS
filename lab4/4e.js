const longestWord = (str) => {
  let arr = str.split(" ");
  let max = arr[0];
  arr.forEach((element) => {
    if (element.length > max.length) {
      max = element;
    }
  });
  return max;
};

console.log(longestWord("DASd csdasaca aff asdasdad"));
