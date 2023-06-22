/**
 * 1065. 字符串的索引对
 * https://leetcode.cn/problems/index-pairs-of-a-string/?envType=list&envId=bxbmnec
 */

/**
 * 60ms  100.00%
 * 42.7MB  100.00%
 */
var indexPairs = function (text, words) {

    let result = []

    for (let i = 0; i < words.length; i++) {
        let tmp = text
        let idx
        let fromIdx = 0
        while ((idx = tmp.indexOf(words[i], fromIdx)) != -1) {
            result.push([idx, idx + words[i].length - 1])
            fromIdx = idx + 1
        }
    }

    return result.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
    })

};

text = "ababa", words = ["aba"]
text = "ababa", words = ["aba", "ab"]

ans = indexPairs(text, words)
console.log(ans)

const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
// ans = array.indexOf(9, 2); // 2


ans = text.indexOf('aba', 1)
console.log(ans)

