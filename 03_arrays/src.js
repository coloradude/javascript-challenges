module.exports = {

  first: function(array){
    return array[0];
  },

  last: function(array){
    return array[array.length-1];
  },

  empty: function(array){
    if (array == 0) {
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, n){
    if (array.length <= n){
      return array;
    } else {
      return array.slice(0, n)
    }
  },

  last_n: function(array, n){jasmine
    if (array.length <= n){
      return array;
    } else {
      return array.slice(array.length - n)
    }
  },

  drop: function(array, n){jasmine
    if (array.length <= n){
      return [];
    } else {
      return array.slice(n)
    }
  },

  union: function(array1, array2){
    if (array1 === 0 && array2 === 0){
      return [];
    } else {
    return array1.concat(array2);
    }
  },

  intersection: function(array1, array2) {
    same = [];
    for (i=0;i<array1.length;i++){
      if (array1.indexOf(array2[i]) > -1){
        same.push(array2[i]);
      }
    }
    return same;
  } 
}