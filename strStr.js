


/**
 * 双指针
 * 52ms
 * 41.1mb
 */
var strStr = function (haystack, needle) {
    const h = haystack.split('')
    const n = needle.split('')
    for (let i = 0; i < h.length; i++) {
        let j = 0
        let tmpI = i
        for (j; j < n.length; j++) {
            if (h[i] != n[j]) {
                break
            }
            i++
        }
        i = tmpI
        if (j == n.length) {
            return i
        }
    }
    return -1
};

//相当于 JS 的 indexOf

haystack = "sadbutsad", needle = "sd"
// haystack = "sadbutsad", needle = "sad"
// haystack = "hello"
// needle = "ll"


console.log(strStr(haystack, needle))