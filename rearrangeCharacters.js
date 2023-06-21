/**
 * 2287. 重排字符形成目标字符串
 * https://leetcode.cn/problems/rearrange-characters-to-make-target-string/
 */





/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {

    let counter = 0
    let hasMatch = true

    let ignoreIdx = new Set()

    while (hasMatch) {
        let j = 0;
        let tmpIdx = []
        let ignoreTargetIdx = new Set()
        console.log(ignoreIdx)
        for (let i = 0; i < s.length; i++) {
            if (ignoreIdx.has(i)) {
                continue
            }
            for (let m = 0; m < target.length; m++) {
                if (ignoreTargetIdx.has(m)) {
                    continue
                }
                if (target[m] == s[i]) {
                    tmpIdx.push(i)
                    ignoreTargetIdx.add(m)
                    j++
                }
            }
            if (j == target.length) {
                for (let k = 0; k < tmpIdx.length; k++) {
                    ignoreIdx.add(tmpIdx[k])
                }
                counter++
                break
            }
        }
        if (j != target.length) {
            hasMatch = false
        }
    }

    return counter
};


s = "ilovecodingonleetcode", target = "code"
s = "abcba", target = "abc"
s = "abbaccaddaeea", target = "aaaaa"

ans = rearrangeCharacters(s, target)
console.log(ans)