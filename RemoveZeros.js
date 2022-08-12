// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// Do not use any temporary arrays or objects. Additionally, you're not able
// to use any Array or Object prototype methods such as .shift(), .push(), etc

// the correctly sorted array should be returned.


const removeZeros = (array) => {

    //  console.log(array)
    let length = array.length
    for (let i = 0; i < length - 1; i++) {
        //  console.log(array[i])
        if (array[i] === 0 || array[i] === "0") {
            let temp = array[i]

            for (let j = i; j < array.length - 1; j++) { // shift array
                array[j] = array[j + 1]
            }
            array[array.length - 1] = temp // add zero at the end
            length--
            i-- // back to previous element due to shift array
        }
    }

    return array;
}