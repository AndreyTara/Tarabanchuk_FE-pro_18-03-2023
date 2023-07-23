import { createDB } from './utils.js'
import { defaults } from './constants.js'
const {
	txtFile,
	HTTP_METHODS,
	urlFront,
	wrongRoute,
	port,
	hostName,
	pictureConfigs,
	commentsConfigs
} = defaults

import fs from 'fs';
import http from 'node:http';

function createServerFn(hostName, port, wrongRoute, urlFront) {
	createDB(txtFile, pictureConfigs, commentsConfigs, [])
	http.createServer( //create Server
		function (req, res) {
			req.on('error', (err) => {
				console.error(err);
				res.statusCode = 400;
				res.end()
			})
			res.on('error', (err) => {
				console.error(err)
			})
			res.setHeader('Access-Control-Allow-Origin', '*'); // GET TO USE SERVER 4001 'http://localhost:4001'
			res.writeHead(200, { 'Content-Type': 'application/json' });
			const urlServer = req.url;
			const methodServer = req.method;

			if (methodServer === HTTP_METHODS.get) {

				if (urlServer === urlFront.photos) {
					const dataReadFile = fs.readFileSync(txtFile.photos, 'utf-8');
					res.write(dataReadFile);
					res.end();
				} else if (urlServer === urlFront.comments) {
					const dataReadFile = fs.readFileSync(txtFile.comments, 'utf-8');
					res.write(dataReadFile);
					res.end();
				} else {
					res.write(wrongRoute);
					res.end();
				}

			} else if (methodServer === HTTP_METHODS.post) {
				if (urlServer === urlFront.uploads) {
					const body = [];
					req.on('data', function (chunk) {
						body.push(chunk);
					});
					req.on('end', function () {
						const bodyStr = Buffer.concat(body).toString();
						fs.writeFileSync(txtFile.uploads, bodyStr);
						res.end(bodyStr);
					});

				} else {
					res.write(wrongRoute);
					res.end();
				}
			} else {
				res.statusCode = 404;
				res.end('not found');
			}
		}
	)
		.listen(port, hostName, () => {
			console.log(`Server runing on http://${hostName}:${port}`);
		});
}

createServerFn(hostName, port, wrongRoute, urlFront);