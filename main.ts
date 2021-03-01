function decrypt (text: string) {
    text = _py.stringSlice(convertToText(text), null, null, -1)
detranslated = ""
    textl = text.split("&")
    for (let index = 0; index < textl.length; index++) {
        if (!(j == 0)) {
            detranslated = "" + detranslated + string[_py.py_array_index(encoded, parseFloat(textl[j])) - 7]
        }
        j += 1
    }
    return convertToText(detranslated)
}
function encrypt (text: string) {
    entranslated = ""
    for (let index = 0; index < text.length; index++) {
        entranslated = "" + entranslated + "&" + ("" + encoded[_py.py_array_index(string, text.charAt(i)) + 7])
        i += 1
    }
    entranslated = _py.stringSlice(convertToText(entranslated), null, null, -1)
return entranslated
}
let detranslated = ""
let string : string[] = []
let encoded : number[] = []
let textl : string[] = []
let j = 0
let i = 0
let entranslated = ""
let morse: number[] = []
let alphabet: number[] = []
let LetterToSend = ""
radio.setGroup(227)
string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", "/", "\\", "$", "#", "@", "%", "^", "*", "(", ")", "_", "-", "=", "+", ">", "<", "?", ";", ":", "'", "\"", "{", "}", "[", "]", "|", "`", "~", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", ""]
encoded = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 100, 101, 102, 103, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 300, 301, 302, 303, 304, 306, 307, 308, 309, 310, 0, 0, 0, 0, 0, 0, 0]
basic.showString("" + (decrypt(encrypt("Secret"))))
