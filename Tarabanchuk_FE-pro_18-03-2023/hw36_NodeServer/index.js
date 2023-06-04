const http = require("node:http");
const fs = require("fs");
const hostName = 'localhost';// 127.0.0.1 the same
const port = 4001;
const wrongRoute = 'wrong route'
const offers = new Array(25).fill(null).map((_, i) => ({
	id: i,
	name: `${i}`,
	coordinats: [randomCoord(), randomCoord()]
})
)
function randomCoord() {
	const crCoordMax = 37.5;
	const crCoordMin = 37.0;
	const numAfterPoint = 4;
	return (Math.random() * (crCoordMax - crCoordMin) + crCoordMin).toFixed(numAfterPoint);
}
fs.writeFileSync("offers.txt", JSON.stringify(offers));

http
	.createServer( //create Server
		function (req, res) {
			res.writeHead(200, { 'Content-Type': 'application/json' }); // if response = '200'
			const urlServer = req.url; // add access to url
			const methodServer = req.method;// add access to method
			if (methodServer === 'POST') {
				if (urlServer === '/add-offer') { //add offer 
					const obj = {
						id: `${offers.length}`,
						name: `${offers.length}`,
						coordinats: [randomCoord(), randomCoord()]
					};
					offers.push(obj);
					fs.writeFileSync("offers.txt", JSON.stringify(offers));
					const dataReadFale = fs.readFileSync("offers.txt", 'utf-8');
					res.write(dataReadFale);
					res.end();
				} else {//add fault
					res.write(wrongRoute);
					res.end(); //add fault
				}
			} else if (methodServer === 'GET') {
				if (urlServer === '/offers') {
					const dataReadFale = fs.readFileSync("offers.txt", 'utf-8');
					res.write(dataReadFale);
					res.end();
				} else {
					res.write(wrongRoute);
					res.end(); //add fault
				}
			}
		}
	)
	.listen(port, hostName, () => {
		console.log(`Server runing on http:// ${hostName}:${port}`);
	});