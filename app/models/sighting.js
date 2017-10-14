const bookshelf = require('../../config/bookshelf');

const Sighting = bookshelf.Model.extend({
	tableName: 'sightings'
	// csdlc
});

module.exports = Sighting;
