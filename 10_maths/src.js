/*
  Do not use standard libraries (like Math) to complete this warm-up.
*/

module.exports = {
  sortNumbers: function (a,b) {
      return a - b;
  },

  maximum: function(array) {
    return array.sort(module.exports.sortNumbers)[array.length-1];
  },

  minimum: function(array) {
    return array.sort(module.exports.sortNumbers)[0];
  },

  average: function(array) {
    var total = 0;
    for (var i=0;i<array.length;i++){
      total += array[i];
    }
    return total / array.length;
  },

  // matrixRowMaximum: function(arrayOfArrays) {
  //   maximums = [];
  //   function sortNumbers(a,b) {
  //     return a - b;
  //   }
  //   for (var i=0;i<arrayOfArrays.length;i++){
  //       arr = arrayOfArrays[i].sort(sortNumbers);
  //       maximums.push(arr[arr.length-1]);
  //     }
  //   return maximums;
  // },

  matrixRowMaximum: function(arrayOfArrays) {
    for (var i=0;i<arrayOfArrays.length;i++){
        arrayOfArrays[i] = module.exports.maximum(arrayOfArrays[i]);
      }
    return arrayOfArrays;
  },

  // matrixRowMinimum: function(arrayOfArrays) {
  //   maximums = [];
  //   function sortNumbers(a,b) {
  //     return a - b;
  //   }
  //   for (i=0;i<arrayOfArrays.length;i++){
  //       arr = arrayOfArrays[i].sort(sortNumbers);
  //       maximums.push(arr[0]);
  //     }
  //   return maximums;
  // },

  matrixRowMinimum: function(arrayOfArrays) {
    for (var i=0;i<arrayOfArrays.length;i++){
        arrayOfArrays[i] = module.exports.minimum(arrayOfArrays[i]);
      }
    return arrayOfArrays;
  },

  matrixRowAverage: function(arrayOfArrays) {
    for (var i=0;i<arrayOfArrays.length;i++){
      arrayOfArrays[i] = module.exports.average(arrayOfArrays[i]);
    }
    return arrayOfArrays;
  },

  sortedRowMatrix: function(arrayOfArrays) {
    for (var i=0;i<arrayOfArrays.length;i++){
      arrayOfArrays[i] = arrayOfArrays[i].sort(module.exports.sortNumbers);
    }
    return arrayOfArrays;
  },

  lengthOfWords: function(sentence) {
    var wordsArr = sentence.split(' ');
    for (var i=0;i<wordsArr.length;i++){
      wordsArr[i] = wordsArr[i].length;
    }
    return wordsArr;
  }
}




















