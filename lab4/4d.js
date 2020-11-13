const alphabetOrder = (str) => {
  let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (arr[i] < arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join("");
};

console.log(alphabetOrder("internettechnology"));
console.log(alphabetOrder("webmaster"));
