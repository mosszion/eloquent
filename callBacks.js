
function fetchData(url, callback) {
    setTimeout(
        () => {
            const data = `Data from ${url}`;
            callback(data); // Invoking the callback with the fetched data
        }, 2000
    );
}

function displayData(receivedData) {
    console.log(`Processing : ${receivedData}`);
  
}

fetchData("https://api.example.com/data", displayData); // Passing displayData as a callback to fetchData   
console.log("Fetching data...");


//////////////////////////////////////

let a  = 1;
let b = 2

setTimeout(() => {
    console.log("Asynchronous code...")
}, 1000)

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetch async:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    })

console.log("Synchronous code ....")
console.log(a)
console.log(b)
