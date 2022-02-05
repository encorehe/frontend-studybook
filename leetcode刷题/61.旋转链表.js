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
 *
 *
 * 本题的解题思路如下：

 根据给定题意，链表可能为空，k 可能为0，所以我们要特判一下如果链表为空或者k=0，直接返回头节点即可
 获取链表长度 len，如果 k是 len 的整数倍，那么我们其实是不需要对链表进行翻转的，否则将 k 对 len 取余，即我们需要翻转的次数
 将链表连成环
 找到拆环的位置，获取拆环后的头节点，然后拆环，返回头节点即可
 *
 */
 var rotateRight = function(head, k) {
	let len = 0;
	let linkHead = head;

	if (!head || !k ) return head;

	let prev = null;
	// 获取链表长度
	while(head) {
		len++;
		head.prev = prev;
		prev = head;
		head = head.next;
	}
	let linkLast = prev;

	k = k % len;
// k 如果为长度整数倍，无需操作
	if (k === 0) return linkHead;
// 连成环
	while(k > 1) {
		prev = prev.prev;
		k--;
	}

	linkLast.next = linkHead;
	prev.prev.next = null;
	return prev;

};