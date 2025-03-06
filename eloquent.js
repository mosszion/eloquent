
//a program that calculates the value of 2nth
let result = 1;
let counter = 0;
while (counter < 10) {
  result= result * 2;
  counter++ 
}
console.log(result)


////////////////////////////////////////////////
//prompt example

    // let yourName;
    //   do {
    //     yourName = prompt("Who are you?")
    //   }while (!yourName);
    //   console.log(yourName);

//////////////////////////////////////////////
//breaking out of a loop

for (let current = 20; ;current = current + 1) {
  if(current % 8 == 0){
    console.log(current);
    break;
  }
}

let x = '#';
for (let i = 0;i< 7; i++) {
  console.log(x);
  x = x + "#";
}

//////////////////////////////////////////////
//fizzbuzz//////
////////////////////////////////////////////////
for (let i=1; i <= 100; i++) {
  if (i % 3 && i % 5) {
    console.log("FizzBuzz")
  }
  else if (i % 3 ) {
    console.log("Fizz");
  }
  else if (i % 5) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

////////////////////////////////////////////////////
//chessboard
/////////////////////////////////////////////////////
let container = " "
for (let i = 0; i < 8; i++ ) {
  for (let j=0; j < 4; j++) {
    container = container +"#"+" "
  }
  console.log(container)
   if (i % 2 == 0) {
    container=""
   }else { container=" "}
}

//////////////////////////////////
// A function that produces a square of a number
////////////////////////////////////
console.log(squared(6))

function squared(a) {
  return a*a
}
console.log(squared(45))

///////////////////////////////////////
///Another function of squared is 
//////////////////////////////////
const sq = function(n) {
  return n*n;
} 
console.log(sq(5));
/////////////////////////////////////
//Arrow function for squared
////////////////////////////////////

const sqrd = a => a*a
console.log(sqrd(9, true, "hello"))

/////////////////////////////////////
//Call stack example
//////////////////////////////////

// function chicken(){
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + "came first.");

//////////////////////////////////////
// closure ////

function wrapValue(n) {
  let local = n;
  return() => local; 
}
let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)

console.log(wrap1())
console.log(wrap2())

/////////////////closure continuation////////

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(3);
console.log(twice(5))
////////////////////////////////

//////////////////////////////////////////

function outerFunction(outerVariable) {
  const xyz = "123";
  return function innerFunction(innerVariable) {
    console.log("Outer Variable is " + outerVariable)
    console.log("Inner variable is " + innerVariable)
    console.log(xyz)
  }
}

const fun = outerFunction("Out");
fun("inner");
////////Another closure example///

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count)
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      console.log(count);
    }


  };
}

const counters = createCounter();
counters.increment();
counters.increment();
counters.decrement();
counters.getCount();
////////////////////////////////////////
//Recursion examples
///////////////////////////////////////

function factorial(n) {
  if(n==0||n==1){
    return 1
  }
  return n*factorial(n-1);
}
console.log(factorial(5));

//////////////////////////////////////
/////Another recursive example fibonacci case//

function fibonacci(n) {
  if(n==0){
    return 0;
  } else if(n==1) {

    return 1;
  }

  return fibonacci(n-1)+fibonacci(n-2);
    

}

console.log(fibonacci(6));
/////////////////////////////////////////
///// Recursive example tree traverse//

function printChildrenRechrsive(t) {
  if(t.children.length === 0){
    return 
  }
  t.children.forEach(child => {
    console.log(child.name)
    printChildrenRechrsive(child)
    
  });


}

const tree = {

  name:'John',
  children: [
    {
      name:'jim',
      children:[]
    },
    {
      name:'Zoe',
      children: [
        {
          name:'kyle', children:[]

        },
        {name:'Sophia', children:[]}
      ]
    }
  ]  
}

printChildrenRechrsive(tree);

////////////////////////////////////////////////
//Another Recursive important example

function findSolution(target) {
  function find(current, history){
    if(current == target) {
      return history;
    } else if(current > target){
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}

console.log(findSolution(24))
console.log(findSolution(48))
console.log(findSolution(50))

//////////////////////////////////////////////////////////
///Exercise ////////////////////////////////////

//write a function that takes two arguments 
//return their minimum

function min(a,b) {
  if( a > b){
    return b;
  } else {
    return a
  }
}

console.log(min(5,7))

//write a function isEven
//accepts a single parameter
// parameter should be positive whole number
//return a Boolean True or false 

function isEven(wnum) {
  if( !Number.isInteger(wnum) ||wnum < 0 ) {
    throw new Error ("Invalid Input")
  }
  
  if(wnum == 0) {
    return true;
  } else if ( wnum == 1) {
    return false;
  } else {
    return isEven(wnum - 2)
  }
}

  
  try {
    console.log(isEven(9867))
    console.log(isEven(102090));
    console.log(isEven(-5))
  } catch (e) {
    console.log(e.message)
  }

  //////////////////////////////////////////////
  //Bean counting exercise
  //write a function countBs that takes string
  // string as its only argument
  // returns a number 
  // number of capital "B"

  function countBs(str) {
    let count = 0;
    for (let i = 0;i <= str.length - 1; i++){
      if(str[i] === "B") {
        count ++
      }

    }
    return count;
  }

  console.log(countBs("heBlloB"))

  ///////////////////////////////////////////////
  //countChar

  function countChar(str, char) {
    let count = 0;
    for (let i = 0;i <= str.length - 1; i++){
      if(str[i] === char) {
        count ++
      }

    }
    return count;
  }

  console.log(countChar("helloollo","o"))

  ////////////////////////////////////////////////

  let obj1 = {value: 10};
  let obj2 = obj1;
  let obj3 = {value: 10};

  console.log(obj1 == obj2);

//////////////////////////////////////////////////////
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});

}
addEntry(["work","touched tree", "pizza", "running", "television"], false);
addEntry(["work","ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend","cycling", "break", "peanuts", "beer"], true);

console.log(journal);


////////////////////////////////////////////////////////////

function phi(table) {
  return (
    (table[3] * table[0] - table[2]*table[1])/
    Math.sqrt(
      (table[2] + table[3])*
      (table[0]+table[1])*
      (table[1] + table[3])*
      (table[0] + table[2])

    )
  )
}

console.log(phi([76, 9 , 4 , 1]))
///////////////////////////////////////////////////////////

let colors = ["red","green","blue","brown"]

for(let color of colors) {
  console.log(color);
}
console.log(colors.includes("blue"))
colors.unshift("black");
console.log(colors)
colors.shift()
console.log(colors)

////////////////////////////////////////////////////////////

console.log([1,2,3,2,1].indexOf(1))
console.log([1,2,3,2,1].lastIndexOf(1))

////////////////////////////////////////////////////////////

console.log([0,1,2,3,4].slice(2,4))
console.log([0,1,2,3,4].slice(2))

////////////////////////////////////////////////////////////

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}
console.log(remove(["a","b","c","d","e"], 2))

////////////////////////////////////////////////////////////

let kim = "you make me smile please stay for a while";
console.log(kim.toUpperCase());
console.log(kim.indexOf("me"))
console.log(kim.slice(4,7))
console.log(kim.trim())


console.log(kim.split(" "))
let separated = kim.split(" ")
console.log(separated.join(" "))
console.log(String(900).padStart(3, "0"))
console.log(kim.length)

console.log("LA".repeat(5));
console.log("LA".repeat(5)[4]);

//////////////////////////////////////////////////////////////////

function maxNum(...numbers) {
  let result= -Infinity;
  for(let number of numbers) {
    if(number > result) result=number;
  }
  return result;
}

console.log(maxNum(2,3,7,8))
console.log(Math.floor(Math.random()*10))
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//Destructuring Array

let names = ["mussie","abu","rashu","lia"];

let [kid1, kid2, kid3, kid4] = names

console.log(kid1)
console.log(kid2)
console.log(kid4)
console.log(kid3)

//////////////////////////////////////////////////////////////////
//// Exercise the sum of a range
//////////////////////////////////////////////////////////////////

function range(start,end,step = 1) {
  let result = []
  if (step > 0) {
    
    for (let i = start; i <= end ; i = i + step){
      result.push(i)
  
    }
  } else {
    for (let i = start; i >= end ; i--) {
      result.push(i)
    }
  }
  return result

}
console.log(range(1,10,2))
console.log(range(5,2,-1))

function sum(array) {
  total=0
  for (let i of array) {
    
    total += i ;

  }
  return total;
}
console.log(sum([1,2,3]))

console.log(sum(range(1,10)))

//////////////////////////////////////////

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

repeat(3, console.log);

let labels = [];
repeat( 5, i => {
  labels.push(`Unit ${i + 1}`);
})

console.log(labels)

////////////////////////////////////////////////

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


////////////////////////////////////////////////

function noisy(f) {
  return (...args) => {
    console.log("calling with args:", args);
    let result = f(...args); 
    console.log("called with args:", args, " , returned", result);
    return result;
  }
}

noisy(Math.min)(3,2,1);

///////////////////////////////////////////////////

function unless(test, then) {
  if(!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

///////////////////////////////////////////////////
//forEach method
//////////////////////////////////////////

let arr = ["A", "B", "C", "D"];
arr.forEach((letter,index) => {
  console.log(letter + index)
  console.log("Array is :", arr)
})

//////////////////////////////////////////////////
//filter mehtod
//////////////////////////////////////////////////

let numbers = [1,2,3,4,5,6,7];

let filteredNumbers = numbers.filter(number => number > 3);
console.log(filteredNumbers)

let evenIndexedNumbers = numbers.filter((number,index) => {
  if(index % 2 == 0) {
    return number
  }
})
console.log(evenIndexedNumbers);

/////////////////////////////////////////////
///////reduce method
///////////////////////

function reducer(array, combine, start) {
  let current = start;
  for (let num of array) {
    current = combine(current, num)
  }
  return current
}

console.log(reducer([1,2,3,4], (a, b) => a+b, 0))

console.log([1,2,3,4].reduce((a,b) => a * b, 1));

//////////////////////////////////////////////////////
// findIndex mehtod
/////////////////////////////////////////
const fruits = ["apple","banana","cherry","date"];

const index = fruits.findIndex((fruit, index) => {
  return fruit === 'apple' && index >= 2;
})
console.log(index)


/////////////////////////////////////////////////
//exercise reverse array
/////////////////////////////////////////////////

function reverseArray(arr) {
  let array = [];
  for(let i = arr.length-1 ; i >= 0 ; i--) {
    array.push(arr[i]);
  }
  return array;
}
console.log(reverseArray([1,2,3]));

function reverseArrayInPlace (arr) {
  return reverseArray(arr)
}

let bundle = [1,2,3]
console.log(reverseArrayInPlace(bundle))
console.log(bundle)
///////////////////////////////////////////////////
//chatgpt exercise 
///////////////////////////////////////////////
let words = ["apple","banana","cherry"];
words.reverse();
console.log(words);

/////////////////////////////////////////////////////
// Deep comparison exercise
////////////////////////////////////////////////////

function deepEqual (obj1,obj2) {
  if(typeof obj1 == typeof obj2) {
    let Argu = typeof obj1
   
    if(Argu == 'number') {
      //////if value type is number
      
      if (obj1 == obj2) {
        return "Equal numbers"
      } else {
        return "Not Equal numbers"
      }

    } else if (Argu == 'string') { 
       //////if value type is string
      console.log('string')
      if(obj1.length == obj2.length) {
        for (let i = 0; i < obj1.length ; i++) {
          if(obj1[i] == obj2[i]) {
            return "Both strings are Equal"
          }
          else { return "Both strings are not Equal"}
        }
      }else {return "Not Equal Strings"}
      } else if (Argu == 'object'){
      /// if value type is object
      // check if it is an array or object
      if (obj1.length != undefined) {

        if(obj1.length == obj2.length) {
          if (obj1.length == 0 ) {
            return "Equal but they are empty arrays"
          }
          for (let i = 0; i < obj1.length ; i++) {
            if(obj1[i] == obj2[i]) {
              return "Arrays are Equal"
            }
            else { return "Arrays are not Equal"}
          }
        }else {return "Not Equal Arrays"}
      } else {
        // by this point we know both arguments are objects
        // first check the properties names
        if ( obj1 != null && obj2 != null) {

          const keys1 = Object.keys(obj1);
          const keys2 = Object.keys(obj2);
        } else {
          return "Not equal , Null couldn't be compaired"
        }

        
        
        // now check if key values are equal keys1 == keys 2
        if(keys1.length == keys2.length) {
          if(keys1.length == 0) {
            return "Equal but empty Objects"
          }
          for (let i = 0 ; i < keys1.length ; i++) {
            if (keys1[i] == keys2[i]) {
              console.log(`${keys1[i]} and ${keys2[i]}`)
              if (obj1[keys1[i]] == obj2[keys2[i]]){
                return "Objects are Equal"

              }
              return "Objects are not Equal"
            }
            return "Not Equal Objects"
          }
        } 
        return "Not Equal Objects because of length"
      }

      

    }
  }
}
let n = 5

console.log(deepEqual(n,n))

///////////////////////////////////////////////////////////////////
//// methods example 

let rabbit = {}

rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`)
}

rabbit.speak("I'm alive.")

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let whiteRabbit = {type:"white", speak} ;
let hungryRabbit = {type:"hungry", speak} ;

whiteRabbit.speak("oh my ears and whiskers, " + "how late its getting!");
hungryRabbit.speak("I can use a carrot right now");

speak.call(hungryRabbit, "Burp!")

//////////////////////////////////////////////////////////////////////////////////

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

/////////////////////////////////////////////////////////////////
let empty = {
};

console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype) )

/////////////////////////////////////////////////////////

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
  }

}

let killerRabbit = Object.create(protoRabbit)
/////////////////////////////////////////////////////////////

const person = {
  firstName : "John",
  lastName: "Doe",
  age:50, eyeColor: "blue"
}

const myArray = Object.values(person)
console.log(myArray);

const m = person ;

m.age = 10;
console.log(person);
console.log(m.age);

delete person.lastName;
console.log(person);

///////////////////////////////////////////////////////////////////
//////////////////Nested Objects////////////////////////////////////
///////////////////////////////////////////////////////////////////

myObj = {
  name: "John",
  lastName : "Zeratsion",
  age:30,
  myCars : {
    car1 : "Ford",
    car2 : "BMW",
    car3 : "Fiat"
  },
  fullName : function() {
    return `The full-name is ${this.name} ${this.lastName}`
  }
}

let p1 = "myCars"
let p2 = "car2"

console.log(myObj.myCars.car2);
console.log(myObj.fullName());
console.log(myObj);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car2"]);
console.log(myObj[p1][p2])

//////////////////////////////////////////////////////////////
//////////Object Constructor Functions////////////////////////
//////////////////////////////////////////////////////////////

function Person(first, last, age, eye) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
  this.language = "Tigriyna";
  this.fullName = function() {
    return this.first + " " + this.last 
  }
}
Person.prototype.nationality = "Eritrean"

const myFather = new Person("Daniel", "Woldegebriel", 64, "black");
const myMother = new Person("Letekidan", "Woldai", 58, "brown");
const myBrother = new Person("Simon", "Zeration", 28, "black");
const mySister = new Person("Lia", "Zeratsion", 22, "brown");
const mySelf = new Person("Mussie", "Zerastion", 35, "black")

console.log(mySelf.first + mySelf.last);
console.log(myMother.first +" "+ myMother.last);
console.log("My mother speaks", myMother.language)
console.log("My father is", myFather.nationality)
console.log("My sister is", mySister.nationality)
console.log("My brother full name is", myBrother.fullName())

myMother.cook = function (food) {
  return "My mother cooks " + food
}
console.log(myMother.cook("pata"))