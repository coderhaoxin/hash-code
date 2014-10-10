'use strict';

exports.hashCode = function(str) {
  var hash = 0;
  for (var i = 0, len = str.length; i < len; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return hash;
};
