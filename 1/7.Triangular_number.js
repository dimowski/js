function evaluate() {
  for (var i = 1, number = 0; numOfDivs(number) < 500; number += i, i++) {}
  return number; 
}

console.log(evaluate());

function numOfDivs(number) {
  var divisors = 2;
  var n = Math.floor(Math.sqrt(number));
  for (var i = 2; i <= n; i++) {
    if (number % i === 0) {
      divisors += 2;
    }
  }
  if (n * n === number) {
    divisors--;
  }
  return divisors;
}
