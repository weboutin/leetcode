/**
 * 859. 亲密字符串
 * https://leetcode.cn/problems/buddy-strings/
 */


/**
 * 68ms  66.92%
 * 43.4MB  12.31%
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false

    if (s == goal) {
        const sSet = new Set()
        for (let i = 0; i < s.length; i++) {
            sSet.add(s[i])
        }
        return sSet.size != s.length
    }


    let diffFirst = null
    let diffSecond = null

    let sArr = s.split('')

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] != goal[i] && diffFirst == null) {
            diffFirst = i
        } else if (sArr[i] != goal[i] && diffFirst != null && diffSecond == null) {
            diffSecond = i
            break
        }
    }

    let tmp = sArr[diffFirst]
    sArr[diffFirst] = sArr[diffSecond]
    sArr[diffSecond] = tmp

    return sArr.join('') == goal;

};


s = "ab", goal = "ba"

// s = "ab", goal = "ab"

// s = "aa", goal = "aa"

ans = buddyStrings(s, goal)
console.log(ans)