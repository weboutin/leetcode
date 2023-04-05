/**
 * 824. 山羊拉丁文
 * https://leetcode.cn/problems/goat-latin/
 */



/**
 * 52ms  94.37%
 * 41.2MB  91.55%
 */
var toGoatLatin = function (sentence) {

    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


    const arr = sentence.split(' ');

    const result = []

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]

        if (!vowel.includes(word[0])) {
            const newWord = word.slice(1)
            word = newWord + word[0]
        }

        word += 'ma'

        for (let j = 0; j < i + 1; j++) {
            word += 'a'
        }


        result.push(word)

    }

    return result.join(' ');
};

sentence = "I speak Goat Latin"


const ans = toGoatLatin(sentence)

console.log(ans)