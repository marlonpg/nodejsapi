var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsuarioSchema   = new Schema({
    user:  { type: String, index: { unique: true }, required: [true, 'User is mandatory!'] },
	password: String,
	email: String,
	level: Number,
	experience: Number
	
});

module.exports = mongoose.model('User', UsuarioSchema);
