
/**
 * We are going to make a robot for automating mail-delivery tasks.
 * The robot will pickup and dropp off parcels
 * The village of Meadowfield consists of 11 places with 14 roads between them.
 * The roads are bidirectional, meaning that the robot can travel in both directions.

 */
const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabins",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Post Office",
    "Marketplace-Town Hall",
    "Marketplace-Shop",     
    "Marketplace-Farm",
    "Shop-Town Hall"
];


/**
 * The array of strings isn't very easy to work with.
 * We will convert it to a more useful data structure.
 * let's convert the list of roads to a data structure that for each place tells us what can be reached from there.
 */

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph) ;


/**
 * The Task: Our robot will be moving around the village picking up pacels in various places, each addressed to some other place.
 * The robot picks up parcels whe it comes to them and delivers them when it arrives at their destinations.
 * Let's condense the village's state down to the minimal set of values that define it .
 * There's is the robot's current location and the collection of undelivered parcels, each of which has a current location and a destination address.
 * Let's not change this state when the robot moves but rather compute a new state for the situation after the move.
 */


/* The VillageState class represents the state of a village with parcels and allows moving parcels to
different destinations within the village. */
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, address:p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }

}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place); // Alice's House
console.log(next.parcels); // []    
console.log(first.place); // Post Office


///Since we want the robots to be able to remember things, so that they can make and execute plans, we also pass them memory and allow them to return a new memeory . 
// Thus the robot returns an object containing both the direction it wants to move in and the memeory value that will be given back to it the next time it is called.

function runRobot(state, robot, memory) {
    for (let turn = 0 ;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}


// Taking a case where the robot randomly picks a direction to move in, we can define a simple robot function that does this.
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return { 
        direction: randomPick(roadGraph[state.place])
    };
}

//lets create a new state with some parcels and run the random robot on it.
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0 ; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

console.log("-------------------------------");

runRobot(VillageState.random(), randomRobot)

// instead of randomly turning , now we will make the robot pick the direction from the memory

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)}
}


// But still we want to use the shortest path to the destination, so we will use the findRoute function to find the shortest path to the destination.
function findRoute(graph, from, to) {
    let work  = [{at:from, route: []}];
    for(let i = 0 ; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)})
            }
        }
    }
}


/// Now our search can not fail and will chose the shortes path 
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

//////////
console.log("-------------------------------");
console.log("Testing Goal-Oriented Robot:");
runRobot(VillageState.random(), goalOrientedRobot, []); // Add empty string for