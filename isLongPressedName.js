/**
 * 925. 长按键入
 * https://leetcode.cn/problems/long-pressed-name/
 */
/**
 * 56ms  88.18%
 * 42.1MB  28.18%
 */
var isLongPressedName = function (name, typed) {
    if (name.length > typed.length) return false
    let same = ''
    let i = 0;
    let j = 0;

    while (i < name.length && j < typed.length) {
        if (name[i] == typed[j]) {
            same = name[i]
            i++
            j++
        } else {
            if (same.length == 0) {
                return false
            }
            let next = name[i]

            while (typed[j] != next && j < typed.length) {
                if (typed[j] != same) {
                    return false
                }
                j++
            }
        }
    }
    for (let m = j; m < typed.length; m++) {
        if (typed[m] != same) return false
    }
    if (i != name.length) {
        return false
    }
    return true
};


name = "aa", typed = "ab"
// name = "a", typed = "b"
// name = "a", typed = "aa"
name = "a", typed = "a"
name = "alex", typed = "aaleexxxxx"
// name = "abcd", typed = "aaabbbcccddd"


// name = "wsrdzkpkbm",
//     typed = "wsrrddzkkpkm"

// name = "a", typed = "axx"

// name = "pyplrz"
// typed = "ppyypllr"

s = isLongPressedName(name, typed)
console.log(s)