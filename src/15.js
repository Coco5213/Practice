/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    const len = nums.length;
    if(nums === [] || len < 3) return res;
    nums.sort((a,b) => a - b); // 数组排序
    for(let i = 0; i < len; i++) {
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue; // 去重
        let L = i + 1;
        let R = len - 1;
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L < R && nums[L] === nums[L + 1]) L++;
                while(L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return res;
};
// @lc code=end

