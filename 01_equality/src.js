module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length){
      return true;
    } else {
      return false;
    }
  },

  firstGreater: function(first, second) {
    if (first > second) {
      return true;
    } else {
      return false;
    }
  },

  firstGreaterThanOrEqualTo: function(first, second) {
    if (first > second || first === second) {
      return true;
    } else {
      return false;
    }
  },

  firstLengthGreater: function(first, second) {
    if (first.length > second.length) {
      return true;
    } else {
      return false;
    }
  },

  secondGreater: function(first, second) {
    if (second > first) {
      return true;
    } else {
      return false;
    }
  }
}
