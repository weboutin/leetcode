/**
 * 1189. “气球” 的最大数量 
 * https://leetcode.cn/problems/maximum-number-of-balloons/?envType=list&envId=bxbmnec
 */



/**
 * 64ms  79.13%
 * 41.2MB  98.26%
 */
var maxNumberOfBalloons = function (text) {

    let count = 0

    let map = {}
    for (let i = 0; i < text.length; i++) {
        if (map[text[i]] == undefined) {
            map[text[i]] = 1
        } else {
            map[text[i]]++
        }
    }


    const dict = {
        b: 1,
        a: 1,
        l: 2,
        o: 2,
        n: 1
    }
    while (1) {
        for (let key in dict) {
            if (map[key] - dict[key] < 0 || map[key] == undefined) {
                return count
            } else {
                map[key] -= dict[key]
            }
        }
        count++
    }
    return count

};


//balloon

text = "nlaebolko"


ans = maxNumberOfBalloons(text)
console.log(text)