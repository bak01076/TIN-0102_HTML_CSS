const fibonacci = (number) => {
  let a = 1;
  let b = 0;
  let tmp;

  while (number >= 0) {
    tmp = a;
    a = a + b;
    b = tmp;
    number--;
  }

  return b;
};
console.log(fibonacci(5));
