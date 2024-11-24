var generator = require('generate-password');

var password = generator.generate({
	length: 18,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);