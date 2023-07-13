/**
 * 2704. 相等还是不相等
 * https://leetcode.cn/problems/to-be-or-not-to-be/
 */


/**
 * 68ms  19.06%
 * 41.1MB  29.67%
*/
var expect = function (val) {

    return {
        toBe: (t) => {
            if (t !== val) {
                throw new Error('Not Equal')
            }

            return t === val

        },
        notToBe: (t) => {
            if (t === val) {
                throw new Error('Equal')
            }
            return t !== val
        }
    }

};

ans = expect(5).toBe(5); // true
console.log(ans)
expect(5).notToBe(5); // throws "Equal"
console.log(ans)