/**
 * 1408. 数组中的字符串匹配
 * https://leetcode.cn/problems/string-matching-in-an-array/
 */



/**
 * 64ms  69.57%
 * 41.2MB  43.48%
 */
var stringMatching = function (words) {
    const result = []

    words.sort((a, b) => a.length - b.length)


    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(words[i]) > -1) {
                result.push(words[i])
                break;
            }
        }

    }

    return result

};


words = ["mass", "as", "hero", "superhero"]


ans = stringMatching(words)
console.log(ans)