/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
快慢指针解法
解题思路： 定义两个指针，一个慢指针，一个快指针，并且一开始慢指针指向head节点，快指针指向head节点
然后，快指针每次向前移动两部，慢指针每次移动一步，开始遍历链表
1、如果head或head.next为空 直接返回false
2、定义两个指针pre,cur，并且初始化都指向head
3、当cur不为空且cur.next不为空，pre每次向后移动一步，cur移动两步
4、此时如果链表中有环，则pre 和cur会相等，如果没有环，会走到末尾返回false
*/
var hasCycle = function(head) {
    if(!head || ! head.next ) return false
    let pre = head,cur = head;
    while (cur&&cur.next) {
       pre = pre.next
       cur = cur.next.next
       if(pre === cur) {
           return true
       }
    }
    return false
};

/*
JSON.stringify()特殊解法
JSON.stringify有环就要报错
JSON.stringify 的功能是，将一个 javascript 字面量对象转化为一个JSON格式的字符串。例如
const obj = {a:1, b:2}

JSON.stringify(obj) // => '{"a":1,"b":2}'
当要转化的对象有“环”存在时，为了避免死循环，JSON.stringify 会抛出异常，例如
const obj = {
  foo: {
    name: 'foo'
  },
  bar: {
    name: 'bar'
    baz: {
      name: 'baz',
      next: null // 将指向obj.bar
    }
  }
}

obj.bar.baz.next = obj.bar

JSON.stringify(obj) // => TypeError: Converting circular structure to JSON

*/
var hasCycle = function(head) {
    try {
        JSON.stringify(head)
        return false
    } catch {
        return true
    }
};



/**
 * “环”检查器
 */
 function detectorCircular(obj) {
    var hasCircle = false,            //  定义一个变量，标志是否有环
        cache = [];                   //  定义一个数组，来保存对象类型的属性值

    (function(obj) {
        var keys = Object.keys(obj);              //获取当前对象的属性数组
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (typeof value == 'object' && value !== null) {
                var index = cache.indexOf(value)
                if (index !== -1) {
                    hasCircle = true
                    break
                } else {
                    cache.push(value)
                    arguments.callee(value)
                    cache.pop()      //  注意：这里要推出数据，因为递归返回，后面遍历的属性不是这个数据的子属性
                }
            }
        }
    })(obj)

    return hasCircle
  }
  
  /**
   * JSON.stringify简化实现
   * @param obj 要转化为字符串的对象
   * @param ignoreCircular 是否忽略“环”检查
   */
  function stringify(obj,ignoreCircular) {
    if (!ignoreCircular && detectorCircular(obj)) {
      throw new TypeError('Converting circular structure to JSON')
    }
  
    const keys = Object.keys(obj)
    
    if (!keys.length) {
      return '{}'
    }
    
    const content = keys.map(key => {
      const value = obj[key]
      
      if (typeof value === 'number') {
        return `"${key}":${value}`
      } else {
        return `"${key}":${stringify(value, true)}`
      }
    }).join(',')
    
    return `{${content}}`
  }
  const obj = {
    foo: {
      name: 'foo'
    },
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        next: null // 将指向obj.bar
      }
    }
  };
  obj.bar.baz.next = obj.bar
  stringify(obj)

  /*
  使用map，一路next通过has…看有无重复
  */


  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let dataMap = new Map()
    while (head) {
      if (dataMap.has(head)) {
        return true
      }
      dataMap.set(head, 1)
      head = head.next
    }
    return false
  };
  