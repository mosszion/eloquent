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