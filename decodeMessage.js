/**
 * 2325. 解密消息
 * https://leetcode.cn/problems/decode-the-message/
 */



/**
 * 68ms  75.71%
 * 43.9MB  35.71%
 */
var decodeMessage = function (key, message) {

    let arr = []

    let set = new Set()

    key = key.replace(/ /g, '')

    for (let i = 0; i < key.length; i++) {

        if (!set.has(key[i])) {

            set.add(key[i])

            arr.push(key[i])
            if (arr.length >= 26) {
                break
            }
        }

    }

    let map = {}

    for (let i = 0; i < arr.length; i++) {

        map[arr[i]] = String.fromCharCode(97 + i)

    }


    let result = ''

    for (let i = 0; i < message.length; i++) {
        result += message[i] == ' ' ? ' ' : map[message[i]]
    }

    return result

};


key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"

ans = decodeMessage(key, message)
console.log(ans)