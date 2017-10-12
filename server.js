const express = require('express');
const app = express();

app.get('/', function( request, response ) { 
	response.json('Slash route is go.');
});

app.listen(3033);
console.log('A quokka is listening on port 3033.');
