var reverseList = function(head) {
    if (!head) return null
    let pre = null, cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
         cur = next
   
    }
    return pre;
  };

  
  var reverseList = function(head) {
    if (!head) return null
    let pre = null, cur = head;
    while (cur) {
      [cur.next,pre,cur] = [ pre,cur,cur.next ]
    }
    return pre;
  };
  