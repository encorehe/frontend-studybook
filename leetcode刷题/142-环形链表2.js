/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针解法
 * 思路与算法

我们使用两个指针，cur 与 pre。它们起始都位于链表的头部。随后，pre 指针每次向后移动一个位置，而 cur 指针向后移动两个位置。如果链表中存在环，则 \textit{cur}cur 指针最终将再次与 \textit{pre}pre 指针在环中相遇。

如下图所示，设链表中环外部分的长度为 aa。pre 指针进入环后，又走了 bb 的距离与 cur 相遇。此时cur 指针已经走完了环的 nn 圈，因此它走过的总距离为 a+n(b+c)+b=a+(n+1)b+nca+n(b+c)+b=a+(n+1)b+nc。


根据题意，任意时刻，cur 指针走过的距离都为pre 指针的 22 倍。因此，我们有

a+(n+1)b+nc=2(a+b) \implies a=c+(n-1)(b+c)
a+(n+1)b+nc=2(a+b)⟹a=c+(n−1)(b+c)

有了 a=c+(n-1)(b+c)a=c+(n−1)(b+c) 的等量关系，我们会发现：从相遇点到入环点的距离加上 n-1n−1 圈的环长，恰好等于从链表头部到入环点的距离。
因此，当发现pre 与 cur 相遇时，我们再额外使用一个指针 ptr。起始，它指向链表头部；随后，它和 pre 每次向后移动一个位置。最终，它们会在入环点相遇。

复杂度分析

时间复杂度：O(N)O(N)，其中 NN 为链表中节点的数目。在最初判断快慢指针是否相遇时，pre 指针走过的距离不会超过链表的总长度；随后寻找入环点时，走过的距离也不会超过链表的总长度。因此，总的执行时间为 O(N)+O(N)=O(N)O(N)+O(N)=O(N)。

空间复杂度：O(1)O(1)。我们只使用了 pre, cur,temp 三个指针。

 */
 var detectCycle = function(head) {
  if(!head) return null
  let pre = head, cur = head;
  while(cur && cur.next) {
      pre = pre.next;
      cur = cur.next.next;
      if(pre === cur) {
          let temp = head;
          while( pre !== temp ) {
              pre = pre.next;
              temp = temp.next
          }
          return pre
      }
  }
  return null
};

/*
哈希表
思路与算法

一个非常直观的思路是：我们遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点，就可以判定链表中存在环。借助哈希表可以很方便地实现。
复杂度分析

时间复杂度：O(N)O(N)，其中 NN 为链表中节点的数目。我们恰好需要访问链表中的每一个节点。

空间复杂度：O(N)O(N)，其中 NN 为链表中节点的数目。我们需要将链表中的每个节点都保存在哈希表当中。
*/
var detectCycle = function(head) {
  const visited = new Set();
  while (head !== null) {
      if (visited.has(head)) {
          return head;
      }
      visited.add(head);
      head = head.next;
  }
  return null;
};