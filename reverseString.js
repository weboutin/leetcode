



/**
 * 84ms
 * 48mb
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let tmp = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length - i - 1] = tmp
    }
    return s
};

s = ["h", "e", "l", "l", "o"]

// o l l e h

console.log(reverseString(s))