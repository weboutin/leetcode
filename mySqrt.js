
/**
 * 暴力解法
 * 116 ms 10.08%
 * 41.74 MB 82.86%
 */
var mySqrt = function (x) {
    if (x <= 1) return x
    if (x == 2) return 1
    if (x == 3) return 1
    for (let i = 3; i < x; i++) {
        if (i * i == x) {
            return i
        }
        if (i * i > x) {
            return i - 1
        }
    }
};

var mySqrt = function (x) {
    if (x <= 1) return x
    mid = parseInt(x / 2)
    console.log(mid)
    while (mid * mid > x) {
        mid = mid / 2
        console.log(mid)
    }
    return parseInt(mid)
};


result = mySqrt(6)

console.log(result)
// result = mySqrt(8)
// console.log(result)