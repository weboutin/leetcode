/**
 * 2631. 分组
 * https://leetcode.cn/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript
 */



/**
 * 144ms  36.11%57.92mb  88.13%
 */
Array.prototype.groupBy = function (fn) {

    let result = {}


    for (let i = 0; i < this.length; i++) {

        const key = fn(this[i])

        if (result[key] == undefined) {

            result[key] = [this[i]]
        } else {
            result[key].push(this[i])
        }

    }

    return result

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */