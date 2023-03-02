/**
 * 64 ms
 * 43.1 MB
 */
var fizzBuzz = function (n) {
    const reuslt = []
    for (let i = 1; i <= n; i++) {
        let tmp = i.toString()
        if (i % 3 == 0) {
            tmp = 'Fizz'
        }
        if (i % 5 == 0) {
            tmp = 'Buzz'
        }
        if (i % 3 == 0 && i % 5 == 0) {
            tmp = 'FizzBuzz'
        }
        reuslt.push(tmp)
    }
    return reuslt

};


const result = fizzBuzz(15)


console.log(result)