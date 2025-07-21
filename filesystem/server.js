import {createServer} from 'http';

import {parse}  from 'url';
import {resolve,sep} from 'path';
import { createReadStream } from 'fs';  
import { stat, readdir } from 'fs/promises';
import mime from 'mime';
import {rmdir, unlink} from 'fs/promises';

import { createWriteStream } from 'fs';



const baseDirectory = process.cwd();

function urlPath(url) {
    let {pathname} = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
        // If the path is not within the base directory, throw an error
        // This prevents access to files outside the intended directory
        // and ensures security by not allowing directory traversal attacks.
        // It also helps to avoid potential security vulnerabilities by restricting file access.
        // This is important for maintaining the integrity and security of the server.
        // It ensures that only files within the specified base directory can be accessed.
        // This is a security measure to prevent unauthorized access to files outside the intended directory.
        // It helps to prevent directory traversal attacks and ensures that only files within the base directory can be accessed.
        // This is crucial for maintaining the security and integrity of the server.
        // It ensures that the server only serves files from the specified directory.
        // This is a security measure to prevent unauthorized access to files outside the intended directory.
        // It helps to prevent directory traversal attacks and ensures that only files within the base directory can be accessed.
        // This is crucial for maintaining the security and integrity of the server.
        // It ensures that the server only serves files from the specified directory.
        // This is a security measure to prevent unauthorized access to files outside the intended directory.
        // It helps to prevent directory traversal attacks and ensures that only files within the baseDirectory can
        throw {status: 403, body: "Access to this resource is forbidden."};
    }
    return path;
}




const methods = Object.create(null);

createServer((req, res) => {
    let handler = methods[req.method] || notAllowed;
    handler (req) 
        .catch(error => {
            if(error.status != null) return error;
            return {body:String(error), status:500};
        })
        .then(({body, status = 200, type = "text/plain"}) => {
            res.writeHead(status, {"Content-Type": type});
            if (body && body.pipe) body.pipe(res);
            else res.end(body);
        });
    }).listen(8000, () => {
        console.log("Server is running on http://localhost:8000");
    });

    async function notAllowed(req) {
        return {
            status: 405,
            body: `Method ${req.method} not allowed.`
        };
    }


    //// GET method implementation

methods.GET = async function(req) {
    let path = urlPath(req.url);
    let stats ;
    try {
        stats = await stat(path);
        
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {
            status: 404,
            body: "File not found."
        };
    }
    if (stats.isDirectory()) {
        return {body : (await readdir(path)).join("\n")};
    } else {
        return {body: createReadStream(path),
        type: mime.getType(path) 
    };   
    }
};

// code to handle DElETE method

methods.DELETE = async function(req) {
    let path = urlPath(req.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return { status: 204};
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return {status:204};
};

// Handler for PUT requests

function pipeStream(from, to) {
    return new Promise((resolve, reject) => {
        from.on('error', reject);
        to.on('error', reject);
        to.on('finish', resolve);
        from.pipe(to);
    });
}


methods.PUT = async function(req) {
    let path  = urlPath(req.url);
    await pipeStream(req, createWriteStream(path));
    return {status: 204};
}
