const express = require('express');
const app = express();
const port = process.env.PORT || 3033;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(morgan('dev'));
app.use(methodOverride);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function( request, response ) { 
	response.json('Slash route is go.');
});

app.listen( port );
console.log(`A quokka is listening on port ${port}.`);
