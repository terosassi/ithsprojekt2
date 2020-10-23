// let str = "Hello world"
// let char = "o"
// let char1 = "o"
// let char2 = "y"
// let start = 1
// let stop = 4
// let konsonanter = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];

// let containsChar1 = containsChar(str, char) // => true
// let containsChar2 = containsChar(str, "x") // => false
// let indexOfChar1 = indexOfChar(str, char) // => 4
// let indexOfChar2 = indexOfChar(str, "x") // => -1
// let reverse1 = reverse(str) // => "dlrow olleH"
// let reverse2 = reverse("Sponge-Bob") // =>  "boB-egnopS"
// let removeChar1 = removeChar(str, char) // => "Hell wrld"
// let removeChar2 = removeChar(str, " ") // =>  "Helloworld"
// let replaceChar1 = replaceChar(str, char1, char2) // => "Helly wyrld"
// let replaceChar2 = replaceChar(str, " ", "-") // =>  "Hello-world"
// let substring1 = substring(str, start, stop) // "ello"
// let substring2 = substring(str, 0, 3) // Hell
// let containsString1 = containsString(str, char) // => true
// let containsString2 = containsString(str, "omg") // => false
// let removeString1 = removeString(str, " world") // => "Hello "
// let removeString2 = removeString(str, "lo wo") // =>  "Helrld"
// let replaceString1 = replaceString(str, "ello", "ail") // => "Hail world"
// let replaceString2 = replaceString(str, "world", "Sponge-Bob") // =>  "Hello Sponge-Bob"
// let strEncrypt = "hej på dig"
// let encrypt1 = encrypt(strEncrypt) // => "hohejoj popå dodigog"
// let strDecrypt = "hohejoj popå dodigog"
// let decrypt1 = decrypt(strDecrypt) // => "hej på dig"



// function containsChar(str, char) {


//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];

//         if (element == char) {

//             return true;
//         }
//     }

//     return false;
// }
// containsChar(str, char)

// function indexOfChar(str, char) {


//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];

//         if (element == char) {

//             return i;
//         }
//     }

//     return -1;
// }

// function reverse(str) {

//     let result = "";

//     for (let i = (str.length - 1); i >= 0; i--) {
//         const element = str[i];

//         result += element;
//     }

//     return result;
// }

// function removeChar(str, char) {

//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];

//         if (element != char) {

//             result += element;
//         }
//     }

//     return result;
// }





// function replaceChar(str, char1, char2) {


//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];

//         if (element != char1) {

//             result += element;
//         } else {

//             result += char2;
//         }
//     }

//     console.log(result);

// }
// replaceChar("hello world", "o", "y")




function substring(str, start, stop) {

    let result = "";

    for (let i = start; i <= stop; i++) {
        const element = str[i];

        result += element;
    }

    console.log(result);
}
substring("hello world", 1, 4)






// function containsString(str, str2) {

//     if (str.length < str2.length) {

//         return containsString(str2, str);
//     }

//     for (let i = 0; i < str.length; i++) {

//         const element = str[i];

//         if (element == str2[0]) {

//             for (let z = 1; z < str2.length; z++) {

//                 const str2Element = str2[z];
//                 const str1Element = str[(i + z)];


//                 if (str2Element == str1Element) {

//                     continue;
//                 }

//                 return false;
//             }

//             return true;
//         }
//     }

//     return false;
// }

// function removeString(str, str2Remove) {

//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] == str2Remove[0]) {

//             for (let z = 1; z < str2Remove.length; z++) {

//                 if (str2Remove[z] != str[(i + z)]) {

//                     break;
//                 } else if ((z + 1) == str2Remove.length) {

//                     i = i + str2Remove.length;
//                 }
//             }
//         }

//         const c = str[i];

//         if (c) {

//             result += c;
//         }
//     }

//     return result;
// }

// function replaceString(str, strOld, strNew) {

//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] == strOld[0]) {

//             for (let z = 1; z < strOld.length; z++) {

//                 if (strOld[z] != str[(i + z)]) {

//                     break;
//                 } else if ((z + 1) == strOld.length) {

//                     i = i + strOld.length;
//                     result += strNew;
//                 }
//             }
//         }

//         const c = str[i];

//         if (c) {

//             result += c;
//         }
//     }

//     return result;
// }

// function encrypt(str) {

//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         const element = str[i];
//         let tmp = element;

//         for (let z = 0; z < konsonanter.length; z++) {

//             const konsonant = konsonanter[z];

//             if (konsonant == element) {

//                 tmp = element + "o" + element;
//                 break;
//             }
//         }

//         result += tmp;
//     }

//     return result;
// }

// function decrypt(str) {

//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         const element = str[i];

//         for (let z = 0; z < konsonanter.length; z++) {

//             const konsonant = konsonanter[z];

//             if (konsonant == element) {

//                 i = i + 2;
//                 break;
//             }
//         }

//         let tmp = str[i];

//         if (tmp) {

//             result += tmp;
//         }
//     }

//     return result;
// }