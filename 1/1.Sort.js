//Implement a function that sort array of numbers and return sorted array. Sort type - all, except primitive like bubble sort.

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  var left = [], right = [];
  var pivot = array[0];
  for (var i = 1; i < array.length; i++) {
    if (pivot >= array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  var tmp = quickSort(left);
  tmp.push(pivot);
  var result = tmp.concat(quickSort(right));
  return result;
}