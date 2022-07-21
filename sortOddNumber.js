/*You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    // Return a sorted array.
      let stack = []
      for(let i=0; i< array.length;i++){
        let currentPosition = i
        if(array[i] %2 !== 0){
          console.log(i)
          for(let j = stack.length-1;j>=0;j--){
                let prePosition = stack[j]
                if(array[currentPosition] < array[prePosition]){
                   let temp = array[currentPosition]
                   array[currentPosition] = array[prePosition]
                   array[prePosition] = temp
                   currentPosition = prePosition
                }
                else{
                   break
                }
          }
          stack.push(i) // add the postion of odd number to the stack  
        }
      }
     return array;
  }
  
  