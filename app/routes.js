const db = require '../config/database';

module.exports = function( app ) {
	app.get( '/api/sightings', ( request, response, next ) => {
    db.query( 'SELECT * FROM sightings', ( err, response ) => {
    	if ( err ) {
    		return next( err );
    	}
    	response.send( response.rows[0] );
    });
	});
};

// const Sighting = require('./models/sighting');

// function getSightings( response ) {
//    Sighting.forge()
//      .fetch()
//      .then( function( sightings ) {
//      	  response.json( sightings );
//      })
//      .catch( function( error ) {
//      	  response.send( error );
//      });
// }

// module.exports = function( app ) {
// 	app.get('/api/sightings', function( request, response ) {
// 		getSightings( response );
// 		// TODO start a branch with SQL code in pg clients
// 		// const res = await client.query('SELECT * FROM sightings')
// 	});

// 	app.post('/api/sightings', function( request, response ) {
// 		Sighting.forge({
// 			celeb: request.body.celeb,
// 			// csdlc
// 			stalker: request.body.stalker,
// 			dateTime: request.body.dateTime,
// 			location: request.body.location,
// 			comment: request.body.comment
// 		})
// 		  .save()
// 		  .then( function( sighting ) {
// 		  	response.json( sighting );
// 		  })
// 		  .catch( function( error ) {
// 		  	response.send( error );
// 		  });
// 	});
// };
