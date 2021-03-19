/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let len = T.length;
    let stack = [];
    let res = new Array(len).fill(0);
    for(let i = 0; i < len; i++) {
        while(stack.length && T[i] > T[stack[stack.length - 1]]){
            let j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

