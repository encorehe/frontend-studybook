/**
 * @param {number} n
 * @return {boolean}
 *
 * 解题思路
 * 整体思路就是每次先走k个( 此时记录 开始结点first 和 结束结点last )
 * 如果能走完,说明需要反转,则直接反转 [first, last) 之间的结点
 * 反转完毕后,再续上last往前走即可
 * */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || !k) return head;
    let len = 1, cur = head;
    while (cur.next){
        cur = cur.next;
        len++ ;//拿到链表总长度
    }
    cur.next = head;//连接成环形链表
    let move = len - (k%len); //取模计算实际移动的步数
    while (move){
        cur = cur.next;
        move--;
    }
    let t = cur.next;
    cur.next = null
    return t
};


