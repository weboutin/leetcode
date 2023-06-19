/**
 * 2047. 句子中的有效单词数
 * https://leetcode.cn/problems/number-of-valid-words-in-a-sentence/
 */




/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    let counter = 0
    sentence = sentence.split(' ').forEach(word => {
        if ((/[a-z]*[\!|\.|\,]?$/.test(word) || /[a-z]*[a-z]-[a-z]*[\!\.\,]?$/.test(word)) && !/\s/.test(word) && word.length > 0) {
            counter++
        }

    })

    return counter
};

// sentence = "cat and  dog"
// sentence = "  "
// sentence = "alice and  bob are playing stone-game10"


// ans = countValidWords(sentence)
// console.log(ans)

// /[a-z]*[\!|\.|\,]?$/.test()


word = 'sd-sd!'
word = 'sdsd'
word = 'sdsd,a'
ans = /^[a-z]*-?[a-z]*|\!|\.|\,$/.test(word)
// ans = /[a-z]*[\!|\.|\,]?$/.test(word)
console.log(ans)