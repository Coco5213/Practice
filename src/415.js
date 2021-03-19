/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let add = 0;
    let arr = [];
    while(i >= 0 || j >= 0 || add != 0) {
        // string经由一元操作符转换为number
        let x = i >= 0 ? num1.charAt(i) - '0' : 0;
        let y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const res = x + y + add;
        arr.push(res % 10);
        add = Math.floor(res / 10);
        i = i - 1;
        j = j - 1;
    }
    return arr.reverse().join(''); // 数组反转并转换为字符串
}
// @lc code=end

