const isPalindrome = (str) => {
  str = str.trim().toLowerCase();
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return str === strReverse;
};

console.log(isPalindrome("arera"));
console.log(isPalindrome("true"));
