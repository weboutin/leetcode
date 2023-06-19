/**
 * 2129. 将标题首字母大写
 * https://leetcode.cn/problems/capitalize-the-title/
 */


/**
 * 72ms  22.03%
 * 41.7MB  37.29%
 */
var capitalizeTitle = function (title) {

    let result = []

    title.split(' ').forEach(word => {
        word = word.toLowerCase()
        if (word.length > 2) {
            result.push([word[0].toLocaleUpperCase() + word.slice(1)])
        } else {
            result.push(word)
        }

    })

    return result.join(' ')

};

title = "capiTalIze tHe titLe"

ans = capitalizeTitle(title)
console.log(ans)