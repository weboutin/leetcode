

/**
 * 67. 二进制求和
 * https://leetcode.cn/problems/add-binary/
 */


/**
 * 64ms  73.62%
 * 48MB  5.04%
 */
var addBinary = function (a, b) {
	a = a.split('').map(e => +e)
	b = b.split('').map(e => +e)
	let long, sort
	if (a.length >= b.length) {
		long = a
		sort = b
	} else {
		long = b
		sort = a
	}

	let i = long.length - 1
	let j = sort.length - 1

	let result = []
	let plusOne = 0
	while (i >= 0) {
		if (j >= 0) {
			let current
			if (long[i] + sort[j] + plusOne <= 1) {
				current = long[i] + sort[j] + plusOne
				plusOne = 0
			}
			else if (long[i] + sort[j] + plusOne == 2) {
				plusOne = 1
				current = 0
			}
			else if (long[i] + sort[j] + plusOne == 3) {
				plusOne = 1
				current = 1
			}
			result = [current].concat(result)
			i--
			j--
		} else {
			if (long[i] + plusOne == 2) {
				current = 0
				plusOne = 1
			} else {
				current = long[i] + plusOne
				plusOne = 0
			}
			result = [current].concat(result)
			i--
		}
	}
	if (plusOne != 0) {
		result = [1].concat(result)
	}
	return result.join('')
};

let a = "100", b = "110010"
const result = addBinary(a, b)
console.log(result)