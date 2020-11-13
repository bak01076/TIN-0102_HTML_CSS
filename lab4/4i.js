const amountTocoins = (amount, coins) => {
  let count = 0;
  let tmp = 0;
  let out = [];
  for (let i = 0; i < coins.length; i++) {
    tmp = 0;
    while (tmp <= amount) {
      tmp = count + coins[i];
      if (tmp <= amount) {
        count = tmp;
        out.push(coins[i]);
      }
    }
  }
  return out;
};

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
