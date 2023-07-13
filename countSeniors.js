/**
 * 2678. 老人的数目
 * https://leetcode.cn/problems/number-of-senior-citizens/
 */



/**
 * 112ms  5.08%
 * 47.2MB  5.08%
 */
var countSeniors = function (details) {
    const reg = /[M|F|O](\d{2})/

    let count = 0

    for (let i = 0; i < details.length; i++) {

        const results = reg.exec(details[i])
        console.log(results[1])
        if (results && Number(results[1]) > 60) {
            count++
        }

    }

    return count

};



details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]
details = ["5612624052M0130", "5378802576M6424", "5447619845F0171", "2941701174O9078"]


ans = countSeniors(details)


// str = '7868190130d7522'

// const reg = /[M|F](\d{2})/

// ans = reg.exec(str)

// ans = str.match(reg)
console.log(ans)

