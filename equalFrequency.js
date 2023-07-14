


/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let map = {}

    let max = Number.MIN_VALUE

    let min = Number.MAX_VALUE


    for (let i = 0; i < word.length; i++) {

        if (map[word[i]] == undefined) {
            map[word[i]] = 1
        } else {
            map[word[i]]++
        }
        max = Math.max(max, map[word[i]])
        min = Math.min(min, map[word[i]])

    }


    return Math.abs(max - min) == 1

};