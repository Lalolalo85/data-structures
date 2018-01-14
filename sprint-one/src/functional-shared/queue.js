var Queue = function() {
  var storage = {
   start : 1,
   end : 1,
   newStorage : {}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
    _.extend(storage, queueMethods);
    return storage;

var queueMethods = {


  // Use an object with numeric keys to store values

  // Implement the methods below

  enqueue : function(value) {
   this.newStorage[this.start] = value
   this.start++;
 },

  dequeue : function() {
   var out = this.newStorage[this.end];
   delete this.storage[this.end];
   this.end++
   return out;
 },

  size : function() {
  if(this.start - this.end > 0){
    return this.start - this.end;
  } else{
    return 0;
  }
};
};
