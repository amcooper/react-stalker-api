const db = require( '../config/database' );

module.exports = function( app ) {
	app.get( '/api/sightings', ( request, response, next ) => {
		db.query( 'SELECT * FROM sightings')
		  .then( res => response.json( res.rows ))
		  .catch( e => console.error( e.stack ));
	});

  app.get( '/api/sightings/:id', (request, response, next ) => {
    db.query( 'SELECT * FROM sightings WHERE id = $1', [ request.params.id ])
      .then( res => response.json( res.rows[0] ))
      .catch( e => console.error( e.stack ));
  });
};
