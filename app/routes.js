const db = require( '../config/database' );

module.exports = function( app ) {
	app.get( '/api/sightings', ( request, response, next ) => {
		db.serialize( function() { // refactor to es6
	    db.all( 'SELECT * FROM sightings', ( err, rows ) => {
	    	if ( err ) {
	    		return next( err );
	    	}
	    	return response.json( rows );
	    });
	  });
	  db.close(); // not sure this helps.
	});

  app.get( '/api/sightings/:id', (request, response, next ) => {
    db.serialize( function() {
    	db.get( 'SELECT * FROM sightings WHERE id = ?', request.params.id, ( err, row ) => {
    		if ( err ) {
    			return next( err );
    		}
    		return response.json( row );
    	});
    });
    db.close();
  });

  app.post( '/api/sightings', ( request, response, next ) => {
    db.serialize( function() {
    	db.run( 'INSERT INTO sightings ( celebrity, stalker, date, location, comment ) VALUES ( ?, ?, ?, ?, ? )', [ request.params.celebrity, request.params.stalker, request.params.date, request.params.location, request.params.comment ], ( err, lastID, changes ) => {
    		if ( err ) {
    			return next( err );
    		}
    		console.log( 'Record created.' );
    	});
    });
  });
};

// id INTEGER PRIMARY KEY,
// celebrity VARCHAR(80),
// stalker VARCHAR(80),
// date TIMESTAMP,
// location VARCHAR(80),
// comment VARCHAR(255)

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
