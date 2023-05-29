// Write code that enhances all arrays such that you can call the array.last() method 
// on any array and it will return the last element. If there are no elements in the array, 
// it should return -1.
 
// Example 1:
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

Array.prototype.last = function() {
    return this.length == 0? -1: this[this.length - 1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */