/**
 * 860. 柠檬水找零
 * https://leetcode.cn/problems/lemonade-change/
 */



/**
 * 72ms  92.97%
 * 48.23MB  70.50%
 */
var lemonadeChange = function (bills) {

    let ownMap = {
        5: 0,
        10: 0,
        20: 0
    }

    for (let i = 0; i < bills.length; i++) {

        ownMap[bills[i]]++

        if (bills[i] == 10) {

            ownMap[5]--

            if (ownMap[5] < 0) {
                return false
            }
        }

        if (bills[i] == 20) {

            if (ownMap[10] > 0) {
                ownMap[10]--
                ownMap[5]--
            } else {
                ownMap[5] -= 3
            }

            if (ownMap[5] < 0 || ownMap[10] < 0) {
                return false
            }

        }


    }

    return true

};

bills = [5, 5, 10, 10, 20]

ans = lemonadeChange(bills)
