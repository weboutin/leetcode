/**
 * 345. 反转字符串中的元音字母
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/
 */


/**
 * 84ms  41.18%
 * 47.2MB  41.18%
 */
var reverseVowels = function (s) {
    let map = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1,
    }

    let i = 0;
    let j = s.length - 1;

    let arr = s.split('')

    while (i < j) {
        if (map[arr[i]] && map[arr[j]]) {
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
            i++;
            j--;
        }
        else if (map[arr[i]] && !map[arr[j]]) {
            j--;
        }
        else if (!map[arr[i]] && map[arr[j]]) {
            i++
        }
        else {
            i++
            j--
        }
    }

    return arr.join('')

};