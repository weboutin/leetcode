/**
 * 1436. 旅行终点站
 * https://leetcode.cn/problems/destination-city/?envType=list&envId=bxbmnec
 */


/**
 * 48ms  100.00%
 * 43.5MB  30.19%
 */
var destCity = function (paths) {
    let end = new Set()
    let s = new Set()
    for (let i = 0; i < paths.length; i++) {
        end.add(paths[i][1])

        if (s.has(paths[i][0])) {
            s.delete(paths[i][0])
        } else {
            s.add(paths[i][0])
        }

        if (s.has(paths[i][1])) {
            s.delete(paths[i][1])
        } else {
            s.add(paths[i][1])
        }

    }

    let result = ''

    s.forEach(key => {
        if (end.has(key)) {
            result = key
        }
    })

    return result
};


paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]

ans = destCity(paths)
console.log(ans)