/*
 * @lc app=leetcode id=232 lang=javascript
 * 17/17 cases passed (56 ms)
 * Your runtime beats 39.82 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (33.8 MB)
 * [232] Implement Queue using Stacks
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return !this.empty() ? this.queue[0] : null;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */