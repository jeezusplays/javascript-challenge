// Given an array arr and a chunk size size, return a chunked array. A chunked array 
// contains the original elements in arr, but consists of subarrays each of length size. 
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
};