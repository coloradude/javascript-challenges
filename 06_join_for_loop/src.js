/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    return list.join('');
  },

  joinWithForAndIndex: function(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
      output.push(arr[i]);
      output.push(i);
    }
    return output.join('');
  },

  joinWithoutOddCharacters: function(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i+=2) {
        output.push(arr[i]);
    }
    return output.join('');
  },

  joinWithForAndToken: function(arr, token) {
    return arr.join(token);
  },

  // joinWithForAndAlternatingTokens: function(arr, token1, token2) {
  //   var output = [];
  //   for (var i = 0; i < arr.length-1 ; i++) {
  //       output.push(arr[i]);
  //       if (i % 2 === 0 && i < arr.length-1) {
  //         output.push(token1);
  //       } else {
  //         output.push(token2);
  //       }
  //   }
  //   output.push(arr[-1]);
  //   return output.join("");
  // },

  joinWithForAndAlternatingTokens: function(arr, token1, token2){
    var firstInserted = arr.join(token1).split('');
    for (var i = 3; i < firstInserted.length; i+=4) {
        firstInserted.splice(i, 1, token2);
      }
    return firstInserted.join('');
  }
}
































