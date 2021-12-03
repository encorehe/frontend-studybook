var reverseBetween = function(head, left, right) {
    // 构造哨兵节点
    const shaobing = new ListNode(0, head);
    // 哨兵指向头节点
    // 指针就位
    let gurad = shaobing;
    let prev = gurad.next;
    // 两个指针向右走 满足 prev就指在 m gurad指在 m的前一个 （同步向右移动）
    let len = left - 1;
    for (let i = 0; i < len; i++) {
        gurad = gurad.next; // gurad指针指向1
        prev = prev.next; // prev右指针指向2
    }

    // 开始搞事情 把节点3断掉 放到2的前面  本来是在2的后面（即是头插入法）
    let len1 = right - left;
    for (let i = 0; i < len1; i++) {
        const r = prev.next; // 刚开始 r是3
        prev.next = prev.next.next;
        r.next = gurad.next;
        gurad.next = r;
    }
    return shaobing.next;
};