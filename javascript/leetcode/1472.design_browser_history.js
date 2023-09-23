var Node = function({ val = 0, next = null, prev = null }) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

/**
* @param {string} homepage
*/
var BrowserHistory = function(homepage) {
  this.head = this.current = new Node({ val: homepage });
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  this.current.next = new Node({ val: url, prev: this.current });
  this.current = this.current.next;
  return null;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  while(steps > 0 && this.current.prev !== null) {
      steps -= 1;
      this.current = this.current.prev;
  }
  return this.current.val;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  while(steps > 0 && this.current.next !== null) {
      steps -= 1;
      this.current = this.current.next;
  }
  return this.current.val;
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/