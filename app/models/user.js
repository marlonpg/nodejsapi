var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsuarioSchema   = new Schema({
    user:  { type: String},
	password: String,
	email: String,
	experience: { type: Number, default: 0 },
	nivel: { type: Number, default: 1 },
	XP: { type: Number, default: 0 },
	energia:{ type: Number, default: 20 },
	itens:[{id : Number }],
	money: { type: Number, default: 0 },
	premiumCristal: { type: Number, default: 20 },
	
});

module.exports = mongoose.model('User', UsuarioSchema);
