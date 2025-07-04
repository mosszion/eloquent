////////////////////////////////////////////////
//////////////Js Abstraction////////////////////
////////////////////////////////////////////////

function repeatLog(n) {
    for ( let i= 0; i <n ; i++ ) {
        console.log(i);
    }
}

repeatLog(5);


//////////////////////////////////////////////
//////////////////////// Abstraction 2
//////////////////////////////////////////////

function repeat(n, callback) {
    for (let i =0; i< n; i++) {
        callback(i)
    }
}

repeat(5, console.log)

//////////////////////////////////////////////
//////////////////////// Abstraction 3
//////////////////////////////////////////////

let lables = [];
repeat(5, i => {
    lables.push(`Unit ${i+1}`);
})

console.log(lables);


//////////////////////////////////////////////
//////////////////////// Higher order functions
//////////////////////////////////////////////

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(9))


let greaterThan5 = greaterThan(5);
console.log(greaterThan5(6))

//////////////////////////////////////////////
//////////////////////// HOF EXAMPLE 2
//////////////////////////////////////////////

function noisy(f) {
    return (...args) => {
        console.log("calling wiht", args);
        let result = f(...args); 
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3,2,1);


//////////////////////////////////////////////
//////////////////////// HOF EXAMPLE 3
//////////////////////////////////////////////

function unless(test, then) {
    if(!test) then()
}

repeat (9, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    })
});

//////////////////////////////////////////////
//////////////////////// HOF forEach
//////////////////////////////////////////////

["a", "b"].forEach((element, i) => {
    console.log(`${element} is at index ${i}`);
});


//////////////////////////////////////////////
//////////////////////// HOF forEach another example
//////////////////////////////////////////////

let children = ["Mussie","Abu", "Rashu","Lia"];

children.forEach((child,index) => {
    console.log(`${child} is the ${index + 1} child born from parents; daniel and letekidan`)
})


//////////////////////////////////////////////
//////////////////////// HOF filter
//////////////////////////////////////////////

function filter(array, test) {
    let passed = [];
    for(let element of array) {
        if(test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter([1,2,3,4,5,6], n => n % 2 == 0)); // [2, 4, 6]   

console.log(filter(children, child => child.length > 4)); // ["Mussie", "Rashu", "Lia"]

//////////////////////////////////////////////
//////////////////////// HOF Transforming with map
//////////////////////////////////////////////

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element))
    }
    return mapped;
}


console.log(map(children, child => child+"ss"));
console.log(map(children, child => child.toUpperCase()));
console.log(map(children, child => child.toLowerCase()));


//////////////////////////////////////////////
//////////////////////// HOF Summerizing with reduce
//////////////////////////////////////////////

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a,b) =>  a + b , 0)); // 6
console.log(reduce([1,2,3,4], (a,b) => a * b, 1))

//////////////////////////////////////////////
//////////////////////// HOF string and character codes
//////////////////////////////////////////////
let horseShoe = "🚀❤️⭐";
console.log(horseShoe.charCodeAt(0)); // 101
console.log(horseShoe.charCodeAt(1)); // 109
console.log(horseShoe.charCodeAt(2)); // 111
console.log(horseShoe.codePointAt(0)); // 128640
console.log(horseShoe[1])   // "❤️"
////////////////////////////////////////////////////

let sami = "Sami";
let abu = sami;

console.log(sami);
console.log(abu);

sami = "Lia";

console.log(sami);
console.log(abu);

//////////////////////////////////////////////
//////////////////////// HOF Exercise
//////////////////////////////////////////////

//////Flattening an array

let arrays = ["A", "B", "c", [1,2,3], ["banana", "apple"], 4, 5];
function flatten(array) {

    let result = reduce(array, (flat, element) => {
        if (Array.isArray(element)) {
            return flat.concat(flatten(element));
        } else {
            return flat.concat(element);
        }
    }, []);
    return result;
   

}
console.log(flatten(arrays)); // ["A", "B", "c", 1, 2, 3, "banana", "apple", 4, 5]


//////////////////////////////////////////////
////////////////////////HOF ex-your own loop
//////////////////////////////////////////////

// write function loop that takes a value, a test function, an update function, and a body function.
function loop(value,test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }


}

loop(3, n => n > 0, n => n - 1, console.log )

//////////////////////////////////////////////////////
////////////////////////HOF ex-Your own everything
//////////////////////////////////////////////////////  
// Implememnt every as a function that takes an array and a predicate function as parameters, write two versions one using a loop and one using the some method

// using a loop method
function every(array, predicate)    {
    for (let element of array ) {
        if(!predicate(element)) {
            return false;
        }
    }
    return true;
}

console.log(every([1,2,3], n => n < 4)); // true

// using the some method
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every2([1,2,3], n => n < 4)); // true


//////////////////////////////////////////////////////
////////////////The Secret Life of Objects
//////////////////////////////////////////////////////  

//Encapsulation
/**
 * OOps is a programming paradigm that uses objects to represent data and behavior.
 * It allows for encapsulation, inheritance, and polymorphism.
 * Encapsulation is the bundling of data and methods that operate on that data within a single unit, or object.
 * This helps to hide the internal state of the object and only expose a public interface for interaction.  
 * Interface is the set of methods and properties that an object exposes to the outside world.
 */

//Methods
/**
 * Methods are functions that are associated with an object.
 * They can access and modify the object's internal state.
 * Methods are defined within the object and can be called using the dot notation.  
 * Methods are used to define the behavior of an object.
 * They can be used to perform actions on the object's data or to return information about the object.
 * Methods can also be used to define the object's interface, allowing other code to interact with the object.  
 * Methods are nothing but functions that are properties of an object.
 */
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
}   
rabbit.run = function(action) {
    console.log(`The rabbit is ${action}`); 

}
rabbit.speak("I am a rabbit"); // The
rabbit.run("running");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let whiteRabbit = {
    type: "white",
    speak
}
let hungryRabbit = {
    type: "hungry",
    speak       
}

whiteRabbit.speak("I am a white rabbit"); // The white rabbit
hungryRabbit.speak("I am a hungry rabbit"); // The hungry rabbit


//Prototypes
/**
 * Prototypes are objects that are used as a template for creating new objects.
 * They allow for inheritance, where an object can inherit properties and methods from another object.
 * Prototypes are used to define the behavior of an object and can be shared among multiple objects.
 * Prototypes are used to create a chain of objects, where each object can access the properties and methods of its prototype.
 */

let empty = {};
console.log(empty.toString); // [Function: toString]
console.log(empty.toString()); // [object Object]

///////

console.log(Object.getPrototypeOf({}) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null


//////////////////////////
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("SKREEE"); // The Killer rabbit

//Classes
/**
 * Classes are a way to define a blueprint for creating objects.
 * They allow for encapsulation, inheritance, and polymorphism.
 * Classes are used to define the structure and behavior of an object.
 * They can have properties and methods, and can be instantiated to create new objects.
 * Classes can also have constructors, which are special methods that are called when an object is created.
 * Constructors can be used to initialize the object's properties and set up its initial state.
 * Classes can also have static methods, which are methods that are associated with the class itself,
 * rather than with instances of the class. Static methods can be used to perform actions that are
 * not specific to a particular instance, such as creating new instances or performing calculations.
 * Classes can also have getters and setters, which are special methods that allow for controlled access to
 * an object's properties. Getters are used to retrieve the value of a property, while setters
 * are used to set the value of a property. Getters and setters can be used to
 * enforce constraints on the values that can be assigned to a property, or to perform additional actions
 * when a property is accessed or modified.
 * Classes can also have inheritance, where a class can inherit properties and methods from another class.
 * This allows for code reuse and the creation of more specialized classes based on existing ones.
 * Inheritance can be achieved using the extends keyword, which allows a class to inherit from another class.
 * The subclass can then override methods from the superclass or add new properties and methods.
 * Classes can also implement interfaces, which are contracts that define a set of methods that a class
 * must implement. This allows for polymorphism, where different classes can be treated as instances of
 * the same interface, allowing for flexibility and code reuse.
 * Classes can also have abstract methods, which are methods that are declared but not implemented in the
 * class itself. Abstract methods must be implemented in subclasses, allowing for a common interface
 * while allowing subclasses to provide their own specific implementations.
 * Classes can also have decorators, which are special functions that can be applied to classes or methods
 * to modify their behavior or add additional functionality. Decorators can be used to add metadata,
 * perform logging, or apply other transformations to classes or methods.
 * Classes can also have mixins, which are a way to add functionality to a class by
 * combining multiple classes or objects together. Mixins allow for code reuse and the creation of
 * more flexible and modular classes.
 * Classes can also have private and protected members, which are properties or methods that are not
 * accessible from outside the class or its subclasses. Private members are only accessible within the
 * class itself, while protected members are accessible within the class and its subclasses.
 * This allows for encapsulation and the hiding of implementation details, while still allowing subclasses
 * to access and modify the protected members.
 * Classes can also have static properties, which are properties that are associated with the class itself,
 * rather than with instances of the class. Static properties can be used to store shared data or
 * configuration settings that are common to all instances of the class.
 * They can be accessed using the class name, rather than an instance of the class.
 * This allows for easy access to shared data without the need to create an instance of the class
 * and can be useful for storing constants or configuration settings that are used across multiple instances.
 * Classes can also have abstract classes, which are classes that cannot be instantiated directly,
 * but can be used as a base class for other classes. Abstract classes can define common properties
 * and methods that can be shared among subclasses, while allowing subclasses to provide their own
 * specific implementations. This allows for code reuse and the creation of more specialized classes
 * based on existing ones, while still enforcing a common interface and behavior.
 */

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }   
}
const myCar1 = new Car("Toyota", "Camry", 2020);
const myCar2 = new Car("Honda", "Civic", 2019);
console.log(myCar1.model); // Car { make: 'Toyota', model: 'Camry'
console.log(myCar2); // Car { make: 'Honda', model: 'Civic' }

////////////////////////////
class People {
    constructor (name,age){
        this.name = name;
        this.age = age

    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const sam = new People("sami", 35);
const adz = new People("Abu", 30);
sam.speak();
adz.speak();

//Maps
/**
 * Maps are a collection of key-value pairs, where each key is unique and maps to a specific value.
 * They allow for efficient retrieval and manipulation of data based on keys.
 * Maps can be used to store and retrieve data in a way that is similar to objects, but with additional features
 * such as maintaining the order of insertion and allowing for any type of value as a key.
 * Maps can also have methods for adding, removing, and checking for keys and values, making them a powerful
 * data structure for managing collections of data.
 */
let ages = {
    "sami": 35,
    "abu": 30,
    "rashu": 25
}
console.log(`Sami is ${ages["sami"]} years old`); // Sami is 35 years old
console.log(`Is Moss's age known ?`, "Moss" in ages); // Abu is
/////////////////

const vegies = new Map(
    [
        ["carrot", 80],
        ["potato", 50],
        ["onion", 30],
        ["tomato", 20]
    ]
);
console.log(vegies);
console.log(vegies.get("carrot")); // 80
console.log(vegies.has("potato")); // true
console.log(vegies.size); // 4
vegies.set("cabbage", 60);
console.log(vegies.get("cabbage")); // 60

console.log(vegies);