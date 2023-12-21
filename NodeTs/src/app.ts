import * as http from 'node:http';

const  hostname = '127.0.0.1';
const port = 9988;

const server = http.createServer( (req:any, rep:any):void => {
  rep.writeHead(200, {'Content-Type': 'text/plain'});
  rep.end('Hello World');
}).listen(9988);




console.log('Server running at MIAW');
type miaw = number | String;

type biaw = miaw & {loli:String}

interface halo {
    name:String,
    title_id:number,
    online:boolean,
    fn:(a:number) => void,
}
type halo3 = {
    name:String,
    title_id?:number,
    online:boolean,
    fn:(a:number) => void,
}
let halo4:halo3 = {
    name:'miaw',
    online:false,
    fn: (a:number) => console.log(a),
}

let halo2:halo = {
    name:'miaw',
    title_id:16,
    online:false,
    fn: (a:number) => console.log(a),
}

halo2.fn(16);
halo4.fn(162);