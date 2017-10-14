const Sighting = require('./models/sighting');

function getSightings( response ) {
   Sighting.forge()
     .fetch()
     .then( function( sightings ) {
     	  response.json( sightings );
     })
     .catch( function( error ) {
     	  response.send( error );
     });
}

module.exports = function( app ) {
	app.get('/api/sightings', function( request, response ) {
		getSightings( response );
	});

	app.post('/api/sightings', function( request, response ) {
		Sighting.forge({
			celeb: request.body.celeb,
			// csdlc
			stalker: request.body.stalker,
			dateTime: request.body.dateTime,
			location: request.body.location,
			comment: request.body.comment
		})
		  .save()
		  .then( function( sighting ) {
		  	response.json( sighting );
		  })
		  .catch( function( error ) {
		  	response.send( error );
		  });
	});
};
