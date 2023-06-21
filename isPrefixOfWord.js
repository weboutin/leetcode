/**
 * 1455. 检查单词是否为句中其他单词的前缀
 * https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */


/**
 * 52ms  100.0%
 * 41.2MB  5.63%
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(searchWord) == 0) {
            return i + 1
        }
    }
    return -1
};



//4
sentence = "i love eating burger", searchWord = "burg"
//-1
sentence = "i am tired", searchWord = "you"


ans = isPrefixOfWord(sentence, searchWord)
console.log(ans)