/**
 * 744. 寻找比目标字母大的最小字母
 * https://leetcode.cn/problems/find-smallest-letter-greater-than-target/
 */


/**
 * 80ms  70.81%
 * 41.8MB  76.01%
 */
var nextGreatestLetter = function (letters, target) {
    for (let i = 0; i < letters.length; i++) {
        //这里应该是比较ASCII的
        if (letters[i] > target) {
            return letters[i]
        }

    }
    return letters[0]
};



var nextGreatestLetter = function (letters, target) {
    let left = 0
    let right = target.length - 1
    if (target > letters[right]) {
        return letters[0]
    }

    while (left <= right) {

        let mid = Math.floor((right - left) / 2 + left)

        if (target > letters[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }


    return letters[left]

};