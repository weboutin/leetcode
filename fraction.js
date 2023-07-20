/**
 * LCP 02. 分式化简
 * https://leetcode.cn/problems/deep-dark-fraction/
 */



/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {




    function helper(idx) {
        if (idx >= cont.length - 1) {
            return { n: 1, m: cont[idx] }
        }



        // return cont[n - 1] + 1 / helper(++n)
        return {
            n: cont[idx] * helper(++idx).m,
            m: cont[idx] * helper(++idx).n
        }

    }


    return helper(0)



    // helper(0)



};

cont = [3]


ans = fraction(cont)
console.log(ans)