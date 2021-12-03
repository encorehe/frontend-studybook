### set方法
#### 解题思路
- 使用Set进行判重
- 循环计算每个位置上的数字的平方和
- 若计算出来的值为1，返回true
- 若Set中出现过计算出现的值，说明进入循环了，永远不可能到1，返回false


```js
     const isHappy = n => {
        const set = new Set();
        let num = n;
        while (true) {
            const strNum = `${num}`;
            const len = strNum.length;
            let newN = 0;
            for (let i = 0; i < len; i++) {
                newN += Number(strNum[i]) ** 2;
            }
            if (newN === 1) return true;
            if (set.has(newN)) return false;
            set.add(newN);
            num = newN;
        }
    };
```

#### 快慢指针算法

```js
    var isHappy  = function(n){
        let pre = n, cur = getNext(n);
        while ( cur !== pre && cur !== 1){
            pre = getNext(pre)
            cur = getNext(getNext(cur))
        }
        return cur === 1
    }


    const getNext = (n) => {
        let t = 0;
        while (n){
            t += (n%10) * (n%10);
            n = Math.floor(n/10);

        }
        return t;
    }
```

#### 找规律算法


```js
var isHappy = function(n) {
    const map = {};
    let num = '' + n;
    
    do {
        let sum = 0;
        for (let i=0; i<num.length; i++) {
            sum += Math.pow(parseInt(num[i]), 2);
        }
        if (sum === 1) return true;
        map[num] = true;
        num = '' + sum;
    }while(!map[num]);

    return false;

};
```
