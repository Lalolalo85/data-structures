var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create the Node with value and new
    var newNode = new Node(value);
    //if head is equal null, point to newNOde
    if(list.head === null){
        list.head = newNode;
    }
    //otherwise, if head is not equal to null,
    if(list.head !== null){
        //cesar has to link to alex (newNode)
        list.head.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    var store = list.head;
    list.head = list.head.next;
     return store.value

  };

  list.contains = function(target){
var moreNodes = list.head;
    while(moreNodes){
    if(target === moreNodes.value){
      return true;
    }else{
      moreNodes = moreNodes.next;
    }
    }
      return false;
};
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
