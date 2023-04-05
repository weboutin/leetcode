/**
 * 917. 仅仅反转字母
 * https://leetcode.cn/problems/reverse-only-letters/
 */



/**
 * 64ms  41.73%
 * 41MB  89.76%
 */
var reverseOnlyLetters = function (s) {
    let reg = /[a-z]|[A-Z]/

    let arr = s.split('');

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const isLeftLetter = reg.test(arr[left]);
        if (!isLeftLetter) {
            left++;
            continue
        }
        const isRightLetter = reg.test(arr[right]);
        if (!isRightLetter) {
            right--;
            continue;
        }
        let tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
        left++;
        right--;

    }

    return arr.join('')
};


s = "Test1ng-Leet=code-Q!"

const ans = reverseOnlyLetters(s)

console.log(ans)