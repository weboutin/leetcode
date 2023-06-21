/**
 * 1704. 判断字符串的两半是否相似
 * https://leetcode.cn/problems/determine-if-string-halves-are-alike/
 */



/**
 * 68ms  53.62%
 * 41.6MB  69.56%
 */
var halvesAreAlike = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const set = new Set(vowels)

    let leftCount = 0;
    let rightCount = 0;
    let i = 0;
    let j = s.length - 1

    while (i < j) {
        if (set.has(s[i])) {
            leftCount++
        }
        if (set.has(s[j])) {
            rightCount++
        }
        i++;
        j--
    }

    return leftCount == rightCount
};


s = "textbook"
s = "book"

ans = halvesAreAlike(s)

console.log(ans)