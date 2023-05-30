// Write a function that checks if a given value is an instance of a given class or superclass. 
// For this problem, an object is considered an instance of a given class if that object has 
// access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, 
// the value or the class could be undefined.

// Example 1:
// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj!=null)
    {
        if(obj.constructor === classFunction)
        {
            return true;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */