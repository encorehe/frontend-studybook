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
var reverseKGroup = function(head, k) {
    if(k === 1) return head
    let dummy = new ListNode(-1), pre = dummy
    let cur = head
    // 反转 [first -> last) 之间的结点
    const reverseNode = (first, last) => {
        let m = k
        while(m--){
            let next = first.next
            first.next = pre.next
            pre.next = first
            first = next
        }
    }
    while(cur){
        let cnt = 0, last = cur, before
        while(last && cnt < k){
            before = last
            last = last.next
            cnt++
        }
        // 足够k个,可以反转
        if(cnt === k){
            reverseNode(cur, last)
            // 将反转后的链表结点与后续结点续上
            cur.next = last
        }else{
            // 不足k个,此时last必然是null
            // 将cur直接指向last的前一个
            cur = before
        }
        pre = cur
        cur = cur.next
    }
    return dummy.next
};
