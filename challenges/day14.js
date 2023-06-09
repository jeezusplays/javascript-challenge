// Write a class that allows getting and setting key-value pairs, however a time until expiration is 
// associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
// Once the duration has elapsed, the key should be inaccessible. The method should return true if the 
// same un-expired key already exists and false otherwise. Both the value and duration should be 
// overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// Example 1:
// Input: 
// ["TimeLimitedCache", "set", "get", "count", "get"]
// [[], [1, 42, 100], [1], [], [1]]
// [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.

var TimeLimitedCache = function() {
    this.Cache=new Map();    
  };
  
  /** 
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  TimeLimitedCache.prototype.set = function(key, value, duration) {
    let res=false;
    if(this.Cache.has(key))
    {
        const ref=this.Cache.get(key).ref;
        clearTimeout(ref);
        res=true;
    }
      const ref=setTimeout(()=>{
        this.Cache.delete(key);
        },duration);
        this.Cache.set(key,{
              value:value,
              ref:ref
        });
    return res;    
  };
  
  /** 
   * @param {number} key
   * @return {number} value associated with key
   */
  TimeLimitedCache.prototype.get = function(key) {
    if(this.Cache.has(key))
    {
        return this.Cache.get(key).value;  
    }
    return -1;    
  };
  
  /** 
   * @return {number} count of non-expired keys
   */
  TimeLimitedCache.prototype.count = function() {
      return this.Cache.size;
  };
  
  /**
   * Your TimeLimitedCache object will be instantiated and called as such:
   * var obj = new TimeLimitedCache()
   * obj.set(1, 42, 1000); // false
   * obj.get(1) // 42
   * obj.count() // 1
   */