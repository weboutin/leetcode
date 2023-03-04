/**
 * 929. 独特的电子邮件地址
 * https://leetcode.cn/problems/unique-email-addresses/
 */



/**
 * 72ms  85.51%
 * 45.2MB  63.77%
 */
var numUniqueEmails = function (emails) {
    let s = new Set()

    emails.forEach(email => {
        let arr = email.split('@')

        arr[0] = arr[0].replaceAll('.', '')
        let idx = arr[0].indexOf('+')
        if (idx != -1) {
            arr[0] = arr[0].slice(0, idx)
        }

        let key = arr[0] + '@' + arr[1]
        s.add(key)

    });

    return s.size
};

emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
emails = ["test.email+alex@leetcode.com", "test.email@leetcode.com"]

numUniqueEmails(emails)