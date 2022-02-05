var reverseList = function(head) {
  if (!head) return null
  //声明变量记录 pre、cur
  let pre = null;
  let cur = head;
  // 当cur是节点时，进行迭代
  while (cur) {
     //先保存当前节点的下一个节点
     const next = cur.next
     cur.next = pre 
     pre = cur
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
