/**
 * 2726. 使用方法链的计算器
 * https://leetcode.cn/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript
 */


/**
 * 64ms  40.08%
 * 40.13mb  14.75%
 */
/**
 * 64ms  40.08%
 * 40.07mb  35.92%
 */
class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value = this.value * value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0) {
            throw new Error("Division by zero is not allowed")
        }
        this.value /= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        // return new Calculator(Math.pow(this.value, value))
        this.value = Math.pow(this.value, value)
        return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value
    }
}