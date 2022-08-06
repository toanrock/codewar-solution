/* Write a function that takes a string of braces, and determines if the order of the braces is valid.
 It should return true if the string is valid, and false if it's invalid.
This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/


validBraces = braces => {
  const stack = [];

  const square = {
    start: '[',
    end: ']'
  };

  const parentheses = {
    start: '(',
    end: ')'
  };

  const curly = {
    start: '{',
    end: '}'
  };

  const allBraces = [square, parentheses, curly];
  const bracesMap = new Map();
  const startingChars = [];

  allBraces.forEach(brace => {
    startingChars.push(brace.start);
    bracesMap.set(brace.end,
      {
        ...brace,
        matches: (endingChar) => endingChar === brace.start
      }
    );
  });

  let matching = true;

  for (let i = 0; i < braces.length && matching; i++) {
    const currBrace = braces[i];

    if (startingChars.indexOf(currBrace) > -1) {
      stack.push(currBrace)
    } else {
      if (!bracesMap.get(currBrace).matches(stack.pop())) {
        matching = false;
      }
    }
  }


  return matching && !stack.length;
}