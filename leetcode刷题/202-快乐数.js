/**
 * @param {number} n
 * @return {boolean}
 * 
 * 解题思路
使用Set进行判重
循环计算每个位置上的数字的平方和
若计算出来的值为1，返回true
若Set中出现过计算出现的值，说明进入循环了，永远不可能到1，返回false
 */
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


const getNext = () => {
    
}