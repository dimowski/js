//Implement a function that returns the first element in array that satisfies given condition.

function search(array, condition) {
  for(var i in array) {
    if(condition(array[i])) {
      return array[i];
    }
  }
}