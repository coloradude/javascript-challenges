module.exports = {

  simpleCall: function(callback){
    return callback();
  },

  each: function(items, callback){
    for (i=0;i<items.length;i++){
      callback(items[i]);
    }
  },

  map: function(items, callback){
    for (i=0;i<items.length;i++){
      items[i] = callback(items[i]);
    }
    return items;
  },

  reduce: function(input, start, callback){
    sum = start;
    for (i=0;i<input.length;i++){
      sum += callback(start, input[i]);
    }
    return sum;
  },

  find: function(input, callback){
    for (i=0;i<input.length;i++){
      if (callback(input[i]) === true) {
        return input[i];
      }
    }
  },

  any: function(input, callback){
    for (i=0;i<input.length;i++){
      if (callback(input[i]) === true) {
        return true;
      }
    }
    return false;
  },

  all: function(input, callback){
    for (i=0;i<input.length;i++){
      if (callback(input[i]) !== true) {
        return false;
      }
    }
    return true;
  }
}
