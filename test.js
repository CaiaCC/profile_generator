const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do u think of Node.js:', (answer) => {
	console.log(`Thank you for ur valuable feedback: ${answer}`);
	
	rl.close();
});