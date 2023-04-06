/**
 * 914. 卡牌分组
 * https://leetcode.cn/problems/x-of-a-kind-in-a-deck-of-cards/
 */



/**
 * 76ms  23.66%
 * 44.5MB  10.75%
 */
var hasGroupsSizeX = function (deck) {
    if (deck.length == 1) return false
    deck = deck.sort((a, b) => a - b)


    let twoSuc = true
    for (let i = 0; i < deck.length; i = i + 2) {
        if (deck[i] != deck[i + 1]) {
            twoSuc = false
        }
    }
    if (twoSuc) return true

    let threeSuc = true
    for (let i = 0; i < deck.length; i = i + 3) {
        if (deck[i] != deck[i + 1] || deck[i] != deck[i + 2]) {
            threeSuc = false
        }
    }
    if (threeSuc) return true

    let fiveSuc = true
    for (let i = 0; i < deck.length; i = i + 5) {
        if (deck[i] != deck[i + 1]
            || deck[i] != deck[i + 2]
            || deck[i] != deck[i + 3]
            || deck[i] != deck[i + 4]
        ) {
            fiveSuc = false
        }
    }
    if (fiveSuc) return true

    let sevenSuc = true
    for (let i = 0; i < deck.length; i = i + 7) {
        if (deck[i] != deck[i + 1]
            || deck[i] != deck[i + 2]
            || deck[i] != deck[i + 3]
            || deck[i] != deck[i + 4]
            || deck[i] != deck[i + 5]
            || deck[i] != deck[i + 6]
        ) {
            sevenSuc = false
        }
    }
    if (sevenSuc) return true


    let diffExist = false
    for (let i = 1; i < deck.length; i++) {
        if (deck[i] != deck[0]) {
            diffExist = true
        }
    }
    if (!diffExist) return true

    return false

};


deck = [1, 2, 3, 4, 4, 3, 2, 1]
// deck = [1, 1, 1, 2, 2, 2, 3, 3]

deck = [1, 1, 2, 2, 2, 2]
deck = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
// deck = [1, 1, 1]

// deck = [1, 1, 1, 2, 2, 2, 3, 3]
deck = [1]
deck = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

deck = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

ans = hasGroupsSizeX(deck)
console.log(ans)