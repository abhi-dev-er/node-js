const http = require("node:http");  
const { hostname } = require("node:os");

const port =3000; 
const host = 'localhost';

const server = http.createServer((req, res)=>{  
    res.statusCode = 200;  
    res.setHeader("Content-type", "text/plain"); 
    res.end('hello abhishek');
});

server.listen(port, () => {
    console.log(`server running at ${hostname}:${port}`);
});