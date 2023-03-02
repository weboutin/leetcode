/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n == 0 || n == 1) return 0
    const reuslt = []
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            console.log(`i=>${i}`)
            console.log(`j=>${j}`)
            if (j % i == 0) {
                reuslt.push(i)
            }
        }
    }
    return reuslt
};

const result = countPrimes(2)
console.log(result)