import {readFile} from 'fs/promises';

readFile("file.txt", 'utf8')
    .then(data => {
        console.log("The content of the file is: ", data);
    }

    );