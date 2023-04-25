const sentence =
    'Fabian\'s computer. T \t\t\t  " this is a quote " \n is broken.' +
    "He needs a new";

let newStr = "10";
let newStr2 = "hello world, this is a world where we live ";

newStr.length;

// console.log(newStr * newStr2);
// console.log(newStr2.length);

// * String Methods
// --------------- slice method ---------------

/*
The slice() method extracts a section of a string and
 returns it as a new string, without modifying the original string.
 it will take two arguments, the first is the starting index, 
 the second is the ending index
*/

const sliceFabian = sentence.slice(0, 6);
const sliceTheRest = newStr2.slice(1, 5);
const sliceFromEnd = newStr2.slice(-5, -1);

// console.log(sliceFromEnd);

// --------------- substring method ---------------

/* The substring method is sim"ilar to the slice method,
but it cannot accept negative values */

const subStringFabian = sentence.substring(0, 6);
const subStringToEnd = sentence.substring(6);

// --------------- substr method ---------------
/* The substr() method is similar to the slice() method,
but instead of specifying the ending index, you specify 
the length of the extracted part. */

const testingSlice = sentence.slice(2, 6);
const testingSubstr = sentence.substr(2, 6);
// console.log("This is the substr:", testingSubstr);
// console.log("This is the slice method:", testingSlice);

// console.log(sentence);

// --------------- replace method ---------------
/* The replace() method replaces a specified value with another
 value in a string.
The replace() method does not change the string it is called on.
It returns a new string. */

const replaceFabian = newStr2.replace("world", "Fabian");
const replaceUniverse = newStr2.replace(/WORLD/i, "Universe");
const replaceGlobalUniverse = newStr2.replace(/WORLD/gi, "Universe");

// console.log(replaceGlobalUniverse);

// --------------- toUpperCase method ---------------
/* The toUpperCase() method converts a string to uppercase letters. */
const upperCase = newStr2.toUpperCase();
// console.log(upperCase);

// --------------- toLowerCase method ---------------
/* The toLowerCase() method converts a string to lowercase letters. */
const lowerCase = newStr2.toLowerCase();
// console.log(lowerCase);

// --------------- concat method ---------------
/* The concat() method is used to join two or more strings. */
const concatString = newStr2.concat(sentence, " " + newStr, " hello");
// console.log(concatString);

// --------------- trim method ---------------

/* The trim() method removes whitespace from both sides of a string.
The trim() method does not change the original string. */

const trimString = "   Hello World!   ";

// console.log(trimString.trim());

// --------------- indexOf method ---------------

/* The indexOf() method returns the index of (the position of)
 the first occurrence of a specified text in a string.
This method returns -1 if the text is not found. */

const indexOfString = sentence.indexOf("computers");
// console.log(indexOfString);

// --------------- lastIndexOf method ---------------
/* The lastIndexOf() method returns the index of the last occurrence
    of a specified text in a string.
This method returns -1 if the text is not found. */

const lastIndexOfString = sentence.lastIndexOf("is");
// console.log(lastIndexOfString);

// --------------- charAt method ---------------
/* The charAt() method returns the character at a specified index
    in a string. */
const charAtString = sentence.charAt(0);
// console.log(charAtString);

// --------------- split method ---------------
/* The split() method is used to split a string into an array of substrings,
and returns the new array. */

const splitString = sentence.split("");
// console.log(splitString);

// --------------- includes method ---------------
/* The includes() method determines whether one string may be found
    within another string, returning true or false as appropriate. */

const includesString = sentence.includes("gter");
// console.log(includesString);

// --------------- startsWith method ---------------
/* The startsWith() method determines whether a string begins with the characters
    of another string, returning true or false as appropriate. */
const startsWithString = sentence.startsWith("Fabian");
// console.log(startsWithString);

// --------------- endsWith method ---------------
/* The endsWith() method determines whether a string ends with the characters
    of another string, returning true or false as appropriate. */
const endsWithString = sentence.endsWith("new");
console.log(endsWithString);

// --------------- repeat method ---------------
/* The repeat() method constructs and returns a new string which contains the
    specified number of copies of the string on which it was called, concatenated together. */
const repeatString = sentence.repeat(2);
// console.log(repeatString);

// --------------- PadStart method ---------------
/* The padStart() method pads the current string with another string (multiple times, if needed)
    until the resulting string reaches the given length. The padding is applied from the start
    (left) of the current string. */

const padStartString = newStr2.padStart(100, "*");
// console.log(padStartString);

// --------------- PadEnd method ---------------
/* The padEnd() method pads the current string with another string (multiple times, if needed)
    until the resulting string reaches the given length. The padding is applied from the end
    (right) of the current string. */

const padEndString = newStr2.padEnd(100, "*");
// console.log(padEndString);

const assign= "my name is fabian \"fAbian\""
const testingAssign= assign.replace(/fa/gi, "FA")

console.log(testingAssign)