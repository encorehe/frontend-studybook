<<<<<<< HEAD
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
=======
/**
 * @param {number} n
 * @return {boolean}
 *
 * 解题思路
 * */
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
>>>>>>> c9d705cf90fdb035a45a5ee07880c36efa552323
