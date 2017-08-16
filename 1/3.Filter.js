//Implement a function that filters array based on callback result.

function filter(array, callback) {
  var filteredArray = [];
  for(var i in array) {
    if(callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}