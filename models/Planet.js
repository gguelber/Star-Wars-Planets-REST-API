const mongoose = require('mongoose');

const PlanetSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	population: {
		type: String,
		required: true
	},
	climate: {
		type: String,
		required: true
	},
	terrain: {
		type: String,
		required: true
	},
	films: {
		type: Array,
		required: true
	}
});

module.exports = mongoose.model('Planets', PlanetSchema);
