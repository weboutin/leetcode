/**
 * 2506. 统计相似字符串对的数目
 * https://leetcode.cn/problems/count-pairs-of-similar-strings/
 */



/**
 * 600ms  17.46%
 * 47.11mb  30.16%
 */
var similarPairs = function (words) {

    function isSim(s1, s2) {

        let set1 = new Set()
        let set2 = new Set()

        for (let i = 0; i < s1.length; i++) {
            set1.add(s1[i])
        }

        for (let i = 0; i < s2.length; i++) {
            if (!set1.has(s2[i])) {
                return false
            }
            set2.add(s2[i])
        }

        return set1.size == set2.size


    }

    let count = 0

    for (let i = 0; i < words.length - 1; i++) {

        for (let j = i + 1; j < words.length; j++) {
            if (isSim(words[i], words[j])) {
                count++
            }
        }
    }

    return count

};