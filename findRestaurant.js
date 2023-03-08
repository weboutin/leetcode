/**
 * 599. 两个列表的最小索引总和
 * https://leetcode.cn/problems/minimum-index-sum-of-two-lists/
 */


/**
 * 100ms  49.11%
 * 50..3MB  10.65%
 */
var findRestaurant = function (list1, list2) {
    let map = new Map()


    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i
    }

    let minIndex = null

    let minGroup = []


    for (let i = 0; i < list2.length; i++) {
        if (map[list2[i]] == undefined) {
            continue
        }
        let idx = i + map[list2[i]]

        if (idx == minIndex) {
            minGroup.push(list2[i])
        } else if (idx < minIndex || minIndex == null) {
            minIndex = idx
            minGroup = [list2[i]]
        }
    }


    return minGroup

};


list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
list2 = ["KFC", "Shogun", "Burger King"]

list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]


ans = findRestaurant(list1, list2)
console.log(ans)