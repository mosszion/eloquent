//Regular Expressions for Eloquent JavaScript
// Regular expression is a type of object.
// It is used to match patterns in strings.
// It is used to search, replace, and validate strings.
// It is used to extract information from strings.
// It is used to validate input.
// It is used to parse strings.
// It is used to manipulate strings.
// It is used to format strings.
// It is used to split strings.
// It is used to join strings.

// Both of this down expressions are equivalent.
// They create a regular expression that matches the string "abc".
// The first one uses the RegExp constructor, while the second one uses the literal notation.
// The literal notation is more concise and easier to read.
// The RegExp constructor is more powerful and allows for dynamic regular expressions.
// The literal notation is more common and is used in most cases.
// The RegExp constructor is used when the regular expression needs to be created dynamically or when it
// needs to be passed as a variable.
let re1 = new RegExp("abc");
let re2 = /abc/;

//Testing for matches
console.log(/abc/.test("123abcde"))
console.log(/abc/.test("abxde"))
console.log("Consoling using the variables re1 and re2");
console.log(re1.test("123abcde"));
console.log(re2.test("123abcde"));

/// IndexOf method is also doing something similar to regular expressions.
let str = "Hello, world!";
console.log(str.indexOf("world")); // Output: 7
console.log(str.indexOf("o"));     // Output: 4 (first "o")
console.log(str.indexOf("z"));     // Output: -1 (not found)

// but indexOf is not as powerful as regular expressions. Because it only searches for exact matches of a substring. And returns the index of the first occurrence of that substring in the string, or -1 if the substring is not found.

console.log(/[0123456789]/.test("in 1992")) // true, because it contains a digit
console.log(/[0-9]/.test("in 1992")) // true, because it contains a digit

console.log(/\d/.test("in 1992")) // true, because \d is a shorthand for [0-9]
console.log(/\w/.test("in 1992")) // true, because \w is a shorthand for [a-zA-Z0-9_]
console.log("Expected true because there is whitespace \s",/\w/.test("in 1992")) // true, because \w is a shorthand for [a-zA-Z0-9_]
console.log(`Expected true for non digit character \D`,/\D/.test("in 1992")) // true, because \D is a 
// shorthand for [^0-9]
console.log(`Expected true for non word character \W`,/\W/.test("in 1992")) // true, because \W is a shorthand for [^a-zA-Z0-9_]

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////Matching a date with format 01-30-2003 15:20////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log("Console dateTime: ",dateTime.test("01-30-2003 15:20")); // true
console.log("Console dateTime but change to different format: ",dateTime.test("30-jan-2003 15:20")); // true

///To invert a set of characters, we can use the caret (^) at the beginning of the character class.
let notBinary = /[^01]/
console.log("Console notBinary expecting false: ",notBinary.test("0101010101")); // false

//Repeating parts of a pattern
// We can use the asterisk (*) to match zero or more occurrences of the preceding element.

let notBinary2 = /[^01]*/ // matches zero or more characters that are not 0 or 1
console.log("Console notBinary2 expecting true: ",notBinary2.test("0101010101")); // true, because it matches the empty string at the beginning
console.log("Console notBinary2 expecting true: ",notBinary2.test("0101010101a")); // true, because it matches the empty string at the beginning and the end
console.log("Console notBinary2 expecting true: ",notBinary2.test("0101010101a0101010101")); // true, because it matches the empty string at the beginning and the end
console.log("Console notBinary2 expecting false: ",notBinary2.test("0101010101a0101010101b")); // false, because it matches the empty string at the beginning and the end, but not the character 'b' in the middle                  

console.log("Repeating digits true", /'\d+'/.test("'123'"))
console.log("Repeating digits false", /'\d+'/.test("''"))
console.log("Repeating digits true with *", /'\d*'/.test("'123'")) // true, because it matches the empty string at the beginning and the end , it is also matching the string '123'
console.log("Repeating digits true with *", /'\d*'/.test("''")) // true, because it matches the empty string at the beginning and the end

let neighbor = /neighbou?r/; // matches "neighbor" or "neighbour"
console.log("Console neighbor expecting true: ", neighbor.test("neighbor")); // true
console.log("Console neighbor expecting true: ", neighbor.test("neighbour")); // true
console.log("Console neighbor expecting false: ", neighbor.test("neighbore")); // false
console.log("Console neighbor expecting false: ", neighbor.test("neighb")); // false

let me = /me?n/;
console.log("Console me expecting true: ", me.test("mn"))
console.log("Console me expecting true: ", me.test("men"))
console.log("Console me expecting true: ", me.test("menr"))

// use braces to specify the number of times a character should appear
let str2 = /a{3,}/; // matches "aaa"
console.log("Console str2 expecting true: ", str2.test("baaa")); // true

//Grouping subexpressions
let cartoonCrying = /boo+(hoo+)+/i; // matches "boohhooo", "boohhooohoo", etc.
console.log("Console cartoonCrying expecting false because it should start in capital: ", cartoonCrying.test("boohhooo")); // false
console.log("Console cartoonCrying expecting true: ", cartoonCrying.test("BooHooHoo")); // true
console.log("Console cartoonCrying expecting true: ", cartoonCrying.test("Boohoohoo")); // true


//Matches and Groups

let match = /\d+/.exec("one two 100"); // returns an array with the matched substring and the index of the match
console.log("Console match: ", match); // ["100", index: 8, input: "one two 100"]
console.log("Console match[0]: ", match[0]);
console.log("Console match.input: ", match.input);

console.log("one two 100".match(/\d+/)); // ["100", index: 8, input: "one two 100"]

let quotedText = /'([^']*)'/; // matches a string enclosed in single quotes and captures the text inside
console.log(quotedText.exec("She said 'hello'"))

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));


//The date class

let newDate = new Date();
console.log("Console newDate: ", newDate); // current date and time

console.log(new Date(2006,11,9)); // current date and time
console.log(new Date(2006,11,9).toString()); // current date and time
console.log(new Date(2006,11,9).getTime()); // current date and time

console.log(new Date(1165640400000))
console.log(new Date().getTime()); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Date.now()); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month-1,day).toString();;
}

console.log(getDate("01-30-2003")); // returns a Date object representing January 30, 2003

//word and string boundaries
console.log(getDate("100-1-30000"))


console.log("1",/cat/.test("concatenation")); // true, because "cat" is a substring of "concatenation"
console.log("2",/\bcat\b/.test("concatenation")); // false, because "cat" is not a whole word in "concatenation"
console.log("3",/\bcat/.test("hat in the cat")); // true, because "cat" is a whole word in "cat in the hat"
console.log("4",/\bcat/.test("concatenation")); // false, because "cat" is not at the beginning of a word in "concatenation"
console.log("5",/cat\b/.test("concatenation")); // false, because "cat" is not at the end of a word in "concatenation"
console.log("6",/\bcat/.test("cat in the hat")); // true, because "cat" is at the beginning of a word in "cat in the hat"
console.log("7",/cat\b/.test("cat in the hat")); // true, because "cat" is at the end of a word in "cat in the hat"


//choice patterns

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log("Console animalCount expecting true: ", animalCount.exec("the 5 pig")); // true

//The mechanics of matching
let input = "A string with some text";
let pattern = /some/;
let match2 = pattern.exec(input);
console.log("Console match2: ", match2); // ["some", index: 10, input: "A string with some text"]
console.log("Console match2[0]: ", match2[0]); // "some"

//Backtracking
let backtrack = /(\w+)\s+\1/; // matches two consecutive words
console.log("Console backtrack expecting true: ", backtrack.test("word word")); // true
console.log("Console backtrack expecting true: ", backtrack.test("word word word")); // true, because it matches the first two words and then fails to match the third word
console.log("Console backtrack expecting true: ", backtrack.test("word word word word")); // true, because it matches the first two words and then matches the third word as well


// another example 

console.log("expects true",/^.*x/.test("abcxe"));


//The replace method
let text = "A string with some text i liked some of it";
let pattern2 = /some/g;
let replacedText = text.replace(pattern2, "replaced");
console.log("Console replacedText: ", replacedText); // "A string with replaced text"

console.log("Liskov, Barbara\nMcCarthy, John\nTuring, Alan".replace(/(\w+), (\w+)/g, "$2 $1"));

// The replace method can also take a function as the second argument
let replacedText2 = text.replace(/some/g, (match) => {
    return match.toUpperCase();
});
console.log("Console replacedText2: ", replacedText2); // "A string with SOME text i liked SOME of it"


// Another more intersting example

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if(amount == 1) {
        unit = unit.slice(0,unit.length-1)
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+)\s(\w+)/g, minusOne)); // "no lemon, 1 cabbage, and 100 eggs"


//Greed
// Greed is a problem that can occur when using regular expressions.
// It happens when a regular expression matches more than it should.
// For example, the following regular expression matches the entire string "abcde" instead of just "abc":
let greedy = /a.*c/;
console.log("Console greedy expecting true: ", greedy.test("abcde")); // true, because it matches the entire string "abcde"
console.log("Console greedy expecting true: ", greedy.test("abccde")); // true, because it matches the entire string "abccde"
console.log("Console greedy expecting true: ", greedy.test("abccdeabc")); // true, because it matches the entire string "abccdeabc"
// To make the regular expression less greedy, we can use the question mark (?) after the asterisk (*):
let lessGreedy = /a.*?c/;
console.log("Console lessGreedy expecting true: ", lessGreedy.test("abcde")); // true, because it matches the substring "abc"
console.log("Console lessGreedy expecting true: ", lessGreedy.test("abccde")); // true, because it matches the substring "abc"
console.log("Console lessGreedy expecting true: ", lessGreedy.test("abccdeabc")); // true, because it matches the substring "abc"

//a function that removes all comments from a piece of js code

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "")
}
console.log(stripComments("let x = 1; // this is a comment\n/* this is a\nmultiline comment */\nlet y = 2;")); // "let x = 1; \n\nlet y = 2;"

//Dynamically creating regular expressions
let pattern3 = "abc";
let dynamicRegex = new RegExp(pattern3);
console.log("Console dynamicRegex expecting true: ", dynamicRegex.test("abcde")); // true
// another example

let nameP = "ghidu";
let text1 = "ghidu is a good person";
let regexp = new RegExp("\\b(" + nameP + ")\\b", "gi");
console.log(text1.replace(regexp, "_$1_")); // "_ghidu_ is a good person"


let anotherName = "dea+hl[]rd";
let anotherText = "This dea+hl[]rd is a good person";
let escaped = anotherName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(anotherText.replace(regexp, "_$&_")); // "_dea+hl[]


// The search method        
let searchText = "A string with some text";
let searchPattern = /some/;
let searchResult = searchText.search(searchPattern);
console.log("Console searchResult: ", searchResult); // 14, the index of the
console.log("console searchResult: ",searchText.search(/below/))

// The search method returns the index of the first match of the regular expression in the string, or -1 if there is no match.
// It is similar to the indexOf method, but it uses regular expressions instead of substrings
// The search method is useful when we want to find the position of a match in a string

//The LASTINDEX PROPERTY

let pattern5 = /y/g;
pattern5.lastIndex = 3; // sets the index to start searching from
let match3 =pattern5.exec("xyzzy");
console.log("console match3: ", match3); // ["y", index: 3, input: "xyzzy"]


// The lastIndex property is used to set the index at which to start searching for the next match.
// It is useful when we want to find multiple matches in a string.
// The lastIndex property is reset to 0 when the regular expression is used with the test method or the exec method.
// It is also reset when the regular expression is used with the replace method
// The lastIndex property is not used with the search method, because the search method always starts searching from the beginning of the string.   

let global = /abc/g;
console.log("console global: ", global.exec("abc abc xyz abc"));

let sticky = /abc/y;
console.log("console sticky: ", sticky.exec("abc xyz abc")); // null, because the sticky flag (y) requires the match to start at the lastIndex position


let dig = /\d/g;
console.log("console dig:", dig.exec("here it is: 1"))

console.log("console dig:", dig.exec("and now: 1"));

console.log("Banana".match(/an/g))

// Looping over matches 

let inputM = "A string with 3 numbers in it ... 42 and 88.";
let num = /\b\d+\b/g

let match4;
while (match4 = num.exec(inputM)) {
    console.log("Found", match4[0], "at index", match4.index);
}


//Parsing the INI file format   

function parseINI(string) {
    //start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^\s*(\w+)=(.*)$/)){
            section[match[1]] = match[2];
        } else if (match = line.match(/^\s*\[(.*)\]$/)) {
            section = result[match[1]] = {};

        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
        
    });
    return result;

}

console.log(parseINI(`
    name=Vasilis
    [address]
    city=Athens`));