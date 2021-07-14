function multiply (m) {
  return function (n) {
    return m * n
  };
}

var multiply9 = multiply(9)
var multiply5 = multiply(5)

console.log (multiply9(8)); // 72
console.log (multiply5(12)); // 60