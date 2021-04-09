/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * /


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let arr = s.split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current == '(' || current == '{' || current == '[') {
          stack.push(current);
      }
      if (current == ')' || current == '}' || current == ']') {
          let left = stack.pop();
          if (current ==')' && left != '(')  {
              return false;
          }
          if (current =='}' && left != '{')  {
              return false;
          }
          if (current ==']' && left != '[')  {
              return false;
          }
      }
  }
  if (stack.length > 0) {
      return false;
  }
  return true;
};