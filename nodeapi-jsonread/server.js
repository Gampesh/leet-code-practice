const http = require('http');
const url = require('url');
const data = require('./data-store');

const hostname = '127.0.0.1';
const port = 4000;
let statusCode = 200;
let resData = '';
const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url);

    const [firstParam, idParam] =  urlObj.pathname.substring(1).split("/")
    console.log(firstParam, idParam);
    if(firstParam !== 'projects') {
        statusCode = '404';
        resData = {message: "Not Found"};
    } else {
        if(!idParam) {
            statusCode = '400';
            resData = {message: "Bad Request"};
        } else {
            statusCode = '200';
            const filterData = data.dataStore.filter(d => {
                return d.id.toString() === idParam;
            });
            if(filterData.length) {
                resData = filterData[0];
            } else {
                statusCode = '404';
                resData = {message: "Not Found"};
            }

        }
    }
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resData));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});