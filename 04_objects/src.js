module.exports = {
  person: function() {
    var john = {
      firstName: "John",
      lastName: "Mayer"
    }
    return john;
  },

  sweetnessProperty: function(input){
    return input.sweetness;
  },

  savorynessProperty: function(input){
    return input["savory-ness"];
  },

  keys: function(input){
    return Object.keys(input);
  },

  sortedKeys: function(input){
    return Object.keys(input).sort();
  },

  reverseSortedKeys: function(input){
    return Object.keys(input).sort().reverse();
  }
}
