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
  });

  app.post( '/api/sightings', ( request, response, next ) => {
  	// response.send( "successful post." );
  	// db.serialize( function() {
		// db.run( `INSERT INTO sightings ( celebrity, stalker, location, comment ) VALUES ( ${request.body.celebrity}, ${request.body.stalker}, ${request.body.location}, ${request.body.comment} )` );
		db.run( "INSERT INTO sightings ( celebrity, stalker, location, comment ) VALUES ( 'test1', 'test2', 'test3','test4' )" );
		response.status( 200 );
		//  });
  });  	
};

  // 	db.run( "INSERT INTO sightings ( celebrity, stalker, location, comment ) VALUES ( ?, ?, ?, ? )", request.body.celebrity, request.body.stalker, request.body.location, request.body.comment, function( err ) {
  	// 		if ( err ) { 
  	// 			console.error( err );
  	// 			return next( err ); 
  	// 		}
  	// 	});
  	// 	// return response.status( 200 );
  	// });
  	// response.json( request.body.celebrity );
   //  db.serialize( function() {
   //  	let statement = db.prepare( 'INSERT INTO sightings ( celebrity, stalker, date, location, comment ) VALUES ( ?, ?, ?, ?, ? )' );
   //  	console.log( 'db.prepare' ); // debug
   //  	console.log( `Request params: ${ Object.values( request.body )}` ); // debug
   //  	statement.run( request.body.celebrity, request.body.stalker, request.body.date, request.body.location, request.body.comment, function( err ) {
   //  		if ( err ) {
   //  			return next( err );
   //  		}
   //  	}).finalize();
  	// 	console.log( 'statement.run' ); // debug
  	// 	console.log( `Request params: ${ request.body.celebrity }` ); // debug
  	// 	console.log( 'Record created.' );


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
