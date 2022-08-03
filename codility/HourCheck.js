// Codity hour check
/*Given four digits, count how many valid times can be displayed on a digital clock (in 24-hour format) using those digits. The earliest time is 00:00
and the latest time is 23:59.
Write a function:
function solution(A, B, C, D);
that, given four integers A, B, C and D (describing the four digits), returns the number of valid times that can be displayed on a digital clock.
Examples:
1. Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are: 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18.
2. Given A = 2, B = 3, C = 3, D = 2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32.
3. Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to display any valid time using the given digits.
Assume that:
A, B, C and D are integers within the range [0..9].*/

// Solution using the permutation algorithm to combine the  A B C D

const solution = (A, B, C, D) => {
    var permuArrayHour = permutationHandleDuplicated([A, B, C, D])
    let count = 0
    console.log(permuArrayHour)
    for (const checkTime of permuArrayHour) {
        if (validHour(checkTime)) { count++ }
    }
    return count
}

const validHour = (inputHour) => {
    let hour = Number(inputHour.slice(0, 2))
    let minute = Number(inputHour.slice(2, 4))
    if (hour < 24 && minute < 60) {
        return true
    }
    return false
}


var permutationHandleDuplicated = (inputArray) => {
    if (inputArray.length === 0) return [];
    var permutationArray = []
    var p = []
    for (let i = 0; i < inputArray.length + 1; i++) p[i] = i  // initital P array to control the iternation
    permutationArray.push(inputArray.join(""))
    let i = 1
    while (i < inputArray.length) {
        p[i]--
        let j = (i % 2) * p[i]
        let perElement = arraySwap(inputArray, i, j)
        if (permutationArray.indexOf(perElement) === -1) { permutationArray.push(perElement) }// handle the duplicated
        i = 1 // reset i
        while (p[i] === 0) {
            p[i] = i
            i++
        }
    }

    return permutationArray;
}

var arraySwap = (inputArray, i, j) => {

    [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]]

    return inputArray.join("")
}