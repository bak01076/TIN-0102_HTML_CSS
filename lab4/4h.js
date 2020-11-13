const secondMinMax = (arr) => {
  const min = Math.min(...arr);
  const secondMin = arr.reduce(
    (priviousNum, currentNum) =>
      currentNum < priviousNum && currentNum !== min ? currentNum : priviousNum,
    Infinity
  );

  const max = Math.max(...arr);
  const secondMax = arr.reduce(
    (priviousNum, currentNum) =>
      currentNum > priviousNum && currentNum !== max ? currentNum : priviousNum,
    -Infinity
  );

  return secondMin + " " + secondMax;
};

const arr = [-2, -3, 5, 4, 8, 7];
console.log(secondMinMax(arr));
