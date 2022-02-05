//递归实现
var reverseBetween = function(head, left, right) {
    var swapPairs = function(head) {
        if (head === null|| head.next === null) {
            return head;
        }
        const newHead = head.next;
        head.next = swapPairs(newHead.next);
        newHead.next = head;
        return newHead;
    };
//迭代实现
    var swapPairs = function(head) {
        const dummyHead = new ListNode(0);
        dummyHead.next = head;
        let temp = dummyHead;
        while (temp.next !== null && temp.next.next !== null) {
            const node1 = temp.next;
            const node2 = temp.next.next;
            temp.next = node2;
            node1.next = node2.next;
            node2.next = node1;
            temp = node1;
        }
        return dummyHead.next;
    };
    //奇偶法
    var swapPairs = function(head) {
        let count  = 1
        //原链的偶数位   指向上一位
        //原链的奇数位，指向 +3 的位置
        let ret = new ListNode(0,head)
        let preNode = ret
        let nextNode = head
        if(!head) return head
        let newHeade = head.next || head
        while(nextNode !== null) {
            let temp = nextNode.next
        if(count %2 === 1) {
            nextNode.next =(nextNode.next && nextNode.next.next && nextNode.next.next.next) || (nextNode.next && nextNode.next.next) || null
        }else {
            nextNode.next = preNode
        }
        preNode = nextNode
        nextNode = temp
        count ++
        }
        return newHeade
    };
    