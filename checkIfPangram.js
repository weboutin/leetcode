/**
 * 1832. 判断句子是否为全字母句
 * https://leetcode.cn/problems/check-if-the-sentence-is-pangram/
 */


/**
 * 64ms  60.80%
 * 41.4MB  73.60%
 */
var checkIfPangram = function (sentence) {
    let set = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

    for (let i = 0; i < sentence.length; i++) {
        set.delete(sentence[i])
        if (set.size == 0) {
            return true
        }
    }
    return false
};

checkIfPangram()