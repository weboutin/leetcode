/**
 * https://leetcode-cn.com/problems/roman-to-integer/ 
 */

/**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let num = 0;
        // 取两位
        if (map[s[i]+ s[i+1]]) {
            num = map[s[i]+ s[i+1]];
            //跳过下一位
            i++;
        } else {
            num = map[s[i]];
        }
        result = result + num;
    }
    return result;
};