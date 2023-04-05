/**
 * 830. 较大分组的位置
 * https://leetcode.cn/problems/positions-of-large-groups/
 */


/**
 * 76ms  53.97%
 * 43.9MB  74.60%
 */
var largeGroupPositions = function (s) {
    let left = 0;

    let result = []


    while (left < s.length) {
        let right = left + 1;

        while (s[left] == s[right]) {
            right++
        }
        if (right - left >= 3) {
            result.push([left, right - 1])
        }

        left = right

    }

    return result

};


s = "abcdddeeeeaabbbcd"
s = "abbxxxxzzy"
s = "abc"
// s = "addd"

ans = largeGroupPositions(s)

console.log(ans)