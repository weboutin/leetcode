/**
 * 2705. 精简对象
 * https://leetcode.cn/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript
 */


/**
 * 96ms  68.61%
 * 49.52mb  64.30%
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {

        const result = []

        for (let i = 0; i < obj.length; i++) {
            if (Boolean(obj[i]) == false) {
                continue
            }
            if (typeof obj[i] == 'object') {
                result.push(compactObject(obj[i]))
            } else {
                result.push(obj[i])
            }
        }

        return result

    } else {
        const result = {}

        for (let key in obj) {
            if (Boolean(obj[key])) {
                // result[key] = obj[key]
                if (typeof obj[key] == 'object') {
                    result[key] = compactObject(obj[key])
                } else {
                    result[key] = obj[key]
                }
            }
        }
        return result

    }

};