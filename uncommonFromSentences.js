/**
 * 884. 两句话中的不常见单词
 * https://leetcode.cn/problems/uncommon-words-from-two-sentences/
 */


/**
 * 60ms  77.54%
 * 41.3MB  56.52%
 */
var uncommonFromSentences = function (s1, s2) {

    const arr = (s1 + ' ' + s2).split(' ')

    const result = []
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }

    for (let key in map) {
        if (map[key] == 1) {
            result.push(key)
        }
    }

    return result

};



// s1 = "this sweet", s2 = "this apple is sour"
// s1 = "this apple is sweet", s2 = "this apple is sour"
s1 = "d b zu d t"
s2 = "udb zu ap"
s1 = "op vu kux dn jsenj hbdez hbdez nbenh z op dxmqd op"
s2 = "kux wnx wnx wbi jsenj nlgfn vu f vu fvxas dn op tb"

ans = uncommonFromSentences(s1, s2)
console.log(ans)