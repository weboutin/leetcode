/**
 * 2744. 最大字符串配对数目
 * https://leetcode.cn/problems/find-maximum-number-of-string-pairs/
 */



/**
 * 64ms  91.74%
 * 42.6MB  90.83%
 */
var maximumNumberOfStringPairs = function (words) {


    let count = 0

    for (let i = 0; i < words.length - 1; i++) {

        let reverse = `${words[i][1]}${words[i][0]}`
        for (let j = i + 1; j < words.length; j++) {
            if (reverse == words[j]) {
                count++
            }

        }

    }

    return count

};

words = ["cd", "ac", "dc", "ca", "zz"]
ans = maximumNumberOfStringPairs(words)
console.log(ans)