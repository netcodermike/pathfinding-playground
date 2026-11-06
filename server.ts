import {createServer} from 'node:http';import {readFileSync} from 'node:fs';import {stripTypeScriptTypes} from 'node:module';
const assets=new Map([
 ['/',{mime:'text/html; charset=utf-8',body:readFileSync(new URL('./public/index.html',import.meta.url))}],
 ['/pathfinding.js',{mime:'text/javascript; charset=utf-8',body:stripTypeScriptTypes(readFileSync(new URL('./pathfinding.ts',import.meta.url),'utf8'))}]
]);
createServer((req,res)=>{const asset=assets.get(new URL(req.url??'/','http://localhost').pathname);if(!asset){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':asset.mime});res.end(asset.body);}).listen(Number(process.env.PORT??3010),'127.0.0.1',()=>console.log('Pathfinding playground: http://127.0.0.1:'+(process.env.PORT??3010)));
