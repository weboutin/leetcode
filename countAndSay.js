

/**
 * - 68 ms
 * - 43.6 MB
 */
var countAndSay = function (n) {

    if (n == 1) {
        return '1'
    }
    const arr = countAndSay(n - 1).split('').map(e => +e)
    const result = []
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++
        } else {
            result.push(count, arr[i])
            count = 1
        }
    }
    return result.join('')
};


console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211




const num = 111221




// const arr = num.toString().split('').map(e => +e)
// const result = []
// let count = 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         count++
//     } else {
//         result.push(count, arr[i])
//         count = 1
//     }
// }
// console.log()