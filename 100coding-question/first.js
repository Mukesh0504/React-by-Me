// concat two string alternatively

let a = "krishna"
let b = "yenikn"

let newStr = ""

function mergeStrAltr(str1, str2) {

    let maxLength = Math.max(str1.length, str2.length)

    for (let i = 0; i < maxLength; i++) {

        if (i < str1.length) {
            newStr = newStr + str1[i]
        }
        if (i < str2.length) {
            newStr = newStr + str2[i]
        }
    }
    console.log(newStr);
}

mergeStrAltr(a, b)
