/**
 * 2047. 句子中的有效单词数
 * https://leetcode.cn/problems/number-of-valid-words-in-a-sentence/
 */



/**
 * 76ms  35.90%
 * 44.9MB  38.46%
 */
var countValidWords = function (sentence) {
  let wordCount = 0

  const arr = sentence.split(' ').filter(e => e != '')
  let numberReg = /[0-9]/

  let lower = /[a-z]/

  for (let i = 0; i < arr.length; i++) {

    const word = arr[i]

    if (numberReg.test(word)) {
      continue
    }

    let symbolCount = 0
    let isWord = true
    for (let j = 0; j < word.length; j++) {
      const letter = word[j]
      if ((letter == '.' || letter == '!' || letter == ',') && j != word.length - 1) {
        isWord = false
      }

      if (letter == '-') {
        symbolCount++
        if (word[j - 1] == undefined || word[j + 1] == undefined) {
          isWord = false
        }
        if (!lower.test(word[j - 1]) || !lower.test(word[j + 1])) {
          isWord = false
        }
      }
    }
    if (isWord && symbolCount <= 1) {
      wordCount++
    }
  }

  return wordCount

};



//3
sentence = "cat and  dog"
//0
// sentence = "!this  1-s b8d!"
//5
// sentence = "alice and  bob are playing stone-game10"

//6
sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."
sentence = '-`'
ans = countValidWords(sentence)
console.log(ans)