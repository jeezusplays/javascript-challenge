// Given an object, return a valid JSON string of that object. 
// You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. 
// The returned string should not include extra spaces. The order of keys should be the 
// same as the order returned by Object.keys().

// Please solve it without using the built-in JSON.stringify method.

 
// Example 1:
// Input: object = {"y":1,"x":2}
// Output: {"y":1,"x":2}
// Explanation: 
// Return the JSON representation.
// Note that the order of keys should be the same as the order returned by Object.keys().

// Example 2:
// Input: object = {"a":"str","b":-12,"c":true,"d":null}
// Output: {"a":"str","b":-12,"c":true,"d":null}
// Explanation:
// The primitives of JSON are strings, numbers, booleans, and null.

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (object === null) {
    return 'null';
  }
  if (typeof object === 'string') {
    return '"' + object + '"';
  }
  if (typeof object === 'boolean' || typeof object === 'number') {
    return object.toString();
  }
  if (Array.isArray(object)) {
    var elements = object.map(function (element) {
      return jsonStringify(element);
    });
    return '[' + elements.join(',') + ']';
  }
  if (typeof object === 'object') {
    var pairs = [];
    Object.keys(object).forEach(function (key) {
      var value = jsonStringify(object[key]);
      if (value !== undefined) {
        pairs.push('"' + key + '":' + value);
      }
    });
    return '{' + pairs.join(',') + '}';
  }
};