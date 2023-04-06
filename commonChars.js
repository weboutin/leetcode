/**
 * 1002. 查找共用字符
 * https://leetcode.cn/problems/find-common-characters/
 */




/**
 * 104ms 12.16%
 * 47.4MB  9.80%
 */
var commonChars = function (words) {
    const result = []
    for (let j = 0; j < words[0].length; j++) {
        let isMatch = true
        for (let i = 1; i < words.length; i++) {
            let idx = words[i].indexOf(words[0][j]);
            if (idx > -1) {
                const arr = words[i].split('')
                delete arr[idx]
                words[i] = arr.join('')
            } else {
                isMatch = false
                break
            }
        }
        if (isMatch) {
            result.push(words[0][j])
        }

    }
    return result

};


words = ["bella", "label", "roller"]


ans = commonChars(words)
console.log(ans)