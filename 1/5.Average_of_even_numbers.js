// Given array of numbers, find average of even.

function averageOfEven(array) {
  var sum = 0, num = 0;
  for (var i in array) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      num++;
    }
  }
  if (num !== 0)
    return sum / num;
  // if no even numbers found returns undefind...
}
