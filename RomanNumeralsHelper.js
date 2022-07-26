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


var RomanNumerals = (function () {
  var symbol = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }

  return {
    toRoman: function (number) {
      console.log("input number " + number)
      let result = ""
      let substract = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
      let index = substract.length - 1
      while (number > 0) {
        let newNumber = number - symbol[substract[index]]
        if (newNumber < 0) {
          index--
        } else {
          result += substract[index]
          number = newNumber

        }
      }
      console.log("final result " + result)
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