function canYouSpotTheBug() {
    "use strict";
    for (let counter = 0 ; counter < 10; counter++) { //correct it by inserting "let" before counter
        console.log("Happy codinng!");    }
}

canYouSpotTheBug();


// This program will try to convert a whole number to a string in a given base but it has a bug,

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
} 
do {
    result = String(n % base) + result;
    n =Math.floor(n/base) ;
}
while (n > 0);
return sign + result;
}

console.log(numberToString(13, 10)); // "1101"

///////////////////////////////////////////////////////////////////////
//////////////////////Exercises//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//1. Retry
function primitiveMultiply(a,b){
    if(Math.random() < 0.2) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure("Klunk")
    }

}

class MultiplicatorUnitFailure extends Error {};

function reliableMultiply(a, b) {
    while(true){
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure){
                console.log("MultiplicatorUnitFailure caught, retrying...");
                
            } else {

                throw e;
            }
        }
    }
}
console.log("Testing reliablemultiply function:");
console.log(reliableMultiply(8, 8)); // 64
console.log(reliableMultiply(3, 8)); // 24



//2. The locked box

const box = {
    locked: true,
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }           
};

function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked) {
        return body();
    }

    box.unlock();
    try {
        return body();
    }
    finally {
        box.lock();
    }       
}

// Test the function
console.log("Testing withBoxUnlocked:");

// Test 1: Normal operation
withBoxUnlocked(function() {
    box.content.push("gold piece");
});

// Test 2: Check content was added
withBoxUnlocked(function() {
    console.log("Box contents:", box.content); // ["gold piece"]
});

console.log("box content after adding gold piece:", box.locked);

