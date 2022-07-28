/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 
uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000


*/



// TODO: create a RomanNumerals helper object


// TODO: create a RomanNumerals helper object


var RomanNumerals = (function () {
  var symbol = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  return {
    toRoman: function (number) {
      let result = ""
      let substract = ["I", "V", "X", "L", "C", "D", "M"]
      let index = substract.length - 1
      let checkfour = 0;
      while (number > 0) {
        let newNumber = number - symbol[substract[index]]
        if (newNumber < 0) {
          index--
          checkfour = 0
        } else {
          result += substract[index]
          number = newNumber
          checkfour++
          if (checkfour === 4) {
            result = result.substring(0, result.length - 4)
            let preIndex = substract.indexOf(result[result.length - 1])
            if (preIndex - index >= 2 || preIndex < 0) {
              result += substract[index] + substract[index + 1]
            }
            else {
              result = result.substring(0, result.length - 1)
              result += substract[index] + substract[index + 2]
            }
          }
        }
      }
      return result
    },

    fromRoman: function (roman) {
      let result = 0;
      let preValue = symbol[roman[0]]

      result += preValue
      for (let i = 1; i < roman.length; i++) {
        let value = symbol[roman[i]]
        if (preValue < value) {
          result += (value - (preValue * 2))
        } else {
          result += value;
        }
        preValue = value
      }
      return result
    }
  }
})();