//Asynchronous programming in JavaScript
/*Asynchronous programming is a programming paradigm that allows tasks to run independently of the main program flow. This means that while one task is waiting for a response (like fetching data from a server), other tasks can continue executing. This is particularly useful in JavaScript, which is single-threaded, allowing it to handle multiple operations without blocking the main thread. Asynchronous programming is often achieved using callbacks, promises, or async/await syntax. These techniques help manage operations that take time to complete, such as network requests, file I/O, or timers, ensuring that the application remains responsive and efficient.*/
//Asynchronous programming is essential for building modern web applications that require real-time data updates, user interactions, and smooth performance. By leveraging asynchronous techniques, developers can create applications that feel fast and responsive, even when performing complex operations or dealing with large amounts of data. Understanding asynchronous programming is crucial for any JavaScript developer, as it enables them to write efficient and effective code that enhances user experience and application performance.

//example
setTimeout(() => {  // This function will execute after a delay
    console.log("This message is delayed by 1 seconds");
}, 1000);

//callbacks in js
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Callbacks are often used in asynchronous programming to ensure that certain code runs only after a specific task has completed, such as fetching data from a server or reading a file.
// Example of a callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Mossi", age: 30 };
        callback(data); // Invoking the callback with the fetched data
    }, 200);
}
fetchData((data) => {
    console.log("Data fetched:", data);
});

function displayData (data) {
    console.log("Displaying data....",data)
}
fetchData(displayData); // Passing displayData as a callback to fetchData
function greet(name, callback) {
    callback();
    console.log(`Hello, ${name}!`);
}

function sayGoodbye() {
    console.log("Goodbye!");
}

function sayHello(name) {
    console.log(`How are you doing today, ${name}?`);
}
greet("Mossi", sayGoodbye);
greet("Mossi", () =>sayHello("Mos")); // Wrap in anonymous function


//Promises in javascript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to attach callbacks for success (resolve) and failure (reject) cases,
// enabling cleaner and more manageable asynchronous code compared to traditional callbacks.
// Promises can be in one of three states: pending, fulfilled, or rejected.
// Example of a Promise

let fifteen = Promise.resolve(15);
fifteen.then(num => {console.log(`Got the number: ${num}`);})

let failedFifteen = Promise.reject(23);
failedFifteen.catch(num => {console.log(`Failed with the number: ${num}`);})


//creating a promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let randomValue = Math.random();
        const success = randomValue > 0.5; // Randomly resolve or reject
        if (success) {
            resolve("Operation was successful! at " + randomValue);
        } else {
            reject("Operation failed! at "+ randomValue);
        }
    }, 200);
})

myPromise 
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
//Generators in JavaScript
// A generator is a special type of function that can pause its execution and resume later.
// It allows you to define an iterative algorithm by using the `function*` syntax and the `yield` keyword.
// Generators are useful for managing asynchronous operations, lazy evaluation, and creating custom iterators.
// Example of a generator function

function* powers(n) {
    for (let i = n;; i *=n) {
        yield i
    }
}
console.log(powers(2)); // This creates a generator object
for (let power of powers(2)) {
    if (power > 1000) break;
    console.log(power);
}

// The Event Loop in JavaScript
// The event loop is a fundamental concept in JavaScript that allows asynchronous operations to be executed without blocking the main thread.
// It continuously checks the call stack and the message queue, executing tasks from the queue when the stack is empty.
// This mechanism enables JavaScript to handle events, timers, and asynchronous operations efficiently.
// Example of the event loop in action

console.log("/////////////////////////////////////////")
console.log("Start");
setTimeout(() => {
    console.log("//////////////////////////");
    console.log("Timeout callback executed");
}, 0);
console.log("End"); 