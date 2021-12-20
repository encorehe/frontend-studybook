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
