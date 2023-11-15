/**
 * 6921. 按分隔符拆分字符串
 * https://leetcode.cn/contest/weekly-contest-355/problems/split-strings-by-separator/
 */


/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {

    const result = []

    for (let i = 0; i < words.length; i++) {
        const arr = words[i].split(separator)

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] != '') {
                result.push(arr[j])
            }
        }
    }

    return result

};