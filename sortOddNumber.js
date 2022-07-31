/*You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

var sortArray = (array) => {
  // Return a sorted array.
  let sortedArray = array.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue)
    if (currentValue % 2 !== 0) {
      let currentIndex = previousValue.length - 1
      for (let i = previousValue.length - 2; i >= 0; i--) {
        if (previousValue[i] > currentValue && previousValue[i] % 2 !== 0) {
          previousValue[currentIndex] = previousValue[i]
          previousValue[i] = currentValue
          currentIndex = i
        }
      }
    }
    return previousValue
  }, [])
  return sortedArray;
}
