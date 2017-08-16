//Implement a function that creates new array with the results of calling a provided function on every element in this array.

function map(array, someFunction) {
  var newArray = [];
  for(var i in array) {
    newArray.push(someFunction(array[i]));
  }
  return newArray;
}