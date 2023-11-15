/**
 * 2591. 将钱分给最多的儿童
 * https://leetcode.cn/problems/distribute-money-to-maximum-children/
 */



/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    if (money < children) {
        return -1
    }


    let oddMoney = money - children

    if (oddMoney < 7) {
        return 0
    }

    let count = 0

    while (oddMoney > 0 && count < children) {
        if (oddMoney >= 7) {
            count++
            oddMoney -= 7
        } else if (oddMoney == 3 && count == children - 1) {
            count--
            break
        } else {
            break
        }

    }


    return count


};

ans = distMoney(17, 2)
console.log(ans)