/**
 * 1720. 解码异或后的数组
 * https://leetcode.cn/problems/decode-xored-array/
 */



/**
 * 92ms  70.15%
 * 47MB  97.01%
 */
var decode = function (encoded, first) {

    const result = [first]

    for (let i = 0; i < encoded.length; i++) {
        result[i + 1] = result[i] ^ encoded[i]
    }

    return result

};


encoded = [1, 2, 3], first = 1


ans = decode(encoded, first)

console.log(ans)