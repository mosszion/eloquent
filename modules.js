//Modules for Eloquent JavaScript
/*Modules is a collection of functions that can be used to work with regular expressions in JavaScript. It includes functions for creating, testing, and manipulating regular expressions, as well as for working with strings and arrays. The functions are designed to be easy to use and understand, making it a great tool for anyone who wants to work with regular expressions in JavaScript.*/   
/*what is a module?
A module is a self-contained piece of code that can be reused in different parts of a program. It can be a function, a class, or a collection of related functions and classes. Modules help organize code, making it easier to read, maintain, and test. In JavaScript, modules can be created using the `export` and `import` keywords, allowing developers to share code between files or even across different projects. Modules can also help avoid naming conflicts by encapsulating variables and functions within their own scope. This means that variables and functions defined in a module won't interfere with those in other modules or the global scope. Overall, modules are a powerful tool for structuring and organizing code, promoting reusability and maintainability.*/

//Example 
const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x=2"));
console.log(x);

let plusOne = Function("n", "return n + 1");
console.log(plusOne(6)); // 7


/////////////////////////////////////////////

const {parse} = require("ini");

console.log(parse("x=10\ny=20"));


/////////////////////////////////////////////

import ordinal from "ordinal";
import {days, months} from "date-names";
