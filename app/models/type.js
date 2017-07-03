var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TypeSchema   = new Schema({
    Name:  { type: String},
	baseAtribute: []
});

module.exports = mongoose.model('Type', TypeSchema);
