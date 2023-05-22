// Given a function fn and a time in milliseconds t, return a throttled version of that function.

// A throttled function is first called without delay and then, for a time interval of t milliseconds, 
// can't be executed but should store the latest function arguments provided to call fn with them 
// after the end of the delay.

// For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. The first function 
// call would block calling functions for the following t milliseconds. The second function call would 
// save arguments, and the third call arguments should overwrite currently stored arguments from the second 
// call because the second and third calls are called before 80ms. Once the delay has passed, the throttled 
// function should be called with the latest arguments provided during the delay period, and it should also 
// create another delay period of 80ms + t.

// Throttle Diagram: ../assets/day-16.png

// he above diagram shows how throttle will transform events. Each rectangle represents 100ms and the 
// throttle time is 400ms. Each color represents a different set of inputs.

 
// Example 1:
// Input: t = 100, calls = [{"t":20,"inputs":[1]}]
// Output: [{"t":20,"inputs":[1]}]
// Explanation: The 1st call is always called without delay
// Example 2:

// Input: t = 50, calls = [{"t":50,"inputs":[1]},{"t":75,"inputs":[2]}]
// Output: [{"t":50,"inputs":[1]},{"t":100,"inputs":[2]}]
// Explanation: 
// The 1st is called a function with arguments (1) without delay.
// The 2nd is called at 75ms, within the delay period because 50ms + 50ms = 100ms, so the next call can be reached at 100ms. 
// Therefore, we save arguments from the 2nd call to use them at the callback of the 1st call.

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
 
var throttle = function(fn, t) {
    let timerId;
    let lastArgs;
    let shouldCall = true;
  
    function execute() {
      if (shouldCall && lastArgs) {
        fn(...lastArgs);
        lastArgs = null;
        shouldCall = false;
        setTimeout(() => {
          shouldCall = true;
          execute();
        }, t);
      }
    }
  
    return function(...args) {
      lastArgs = args;
      execute();
    };
  };
  /**
   * const throttled = throttle(console.log, 100);
   * throttled("log"); // logged immediately.
   * throttled("log"); // logged at t=100ms.
   */