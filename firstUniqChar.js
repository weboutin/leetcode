
/**
 * 转数组后双指针
 * 112ms
 * 47mb
 */
var firstUniqChar = function (s) {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        let hasEqual = false
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j) {
                hasEqual = true
                break
            }
        }
        if (!hasEqual) return i
    }
    return -1
};


/**
 * 84ms
 * 47.8MB
 */
var firstUniqChar = function (s) {
    const arr = s.split('')
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] != undefined) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
    }
    for (let key in map) {
        if (map[key] == 1) {
            return s.indexOf(key)
        }
    }
    return -1
};



/**
 * 112ms
 * 47.s9MB
 */
var firstUniqChar = function (s) {
    const arr = s.split('')
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] != undefined) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == 1) {
            return i
        }
    }
    return -1
};


/**
 * 96 ms
 * 43.7MB
 */
var firstUniqChar = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return i
        }
    }
    return -1
};


s = "leetcode"
// s = "loveleetcode"
// s = "aabb"


console.log(firstUniqChar(s))