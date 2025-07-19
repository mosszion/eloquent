import {readFile, writeFile} from 'fs';
readFile("file.txt", 'utf8', (err,data) => {
    if (err) throw err;
    console.log("The content of the file is: ", data);
});

writeFile("file.txt", "Hello mossi man keep doing what you are doing",(err)=>{
    if (err) throw err;
    console.log("The file has been written successfully.");
})
