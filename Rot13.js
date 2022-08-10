/*How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, 
ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

Test examples:

"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"
*/

const rot13 = (str) => {
    let result = ""
    for (let ch of str) {
        let asciiCode = ch.charCodeAt()

        if ((asciiCode >= 65 && asciiCode <= 77) || (asciiCode >= 97 && asciiCode <= 109)) {
            asciiCode += 13
        } else if ((asciiCode >= 78 && asciiCode <= 90) || (asciiCode >= 110 && asciiCode <= 122)) {
            asciiCode -= 13
        }
        result += String.fromCharCode(asciiCode)
    }
    return result
}