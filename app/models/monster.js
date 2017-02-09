var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MonsterSchema   = new Schema({
    name: String,
	level: Number,
	hp: Number,
	attack: Number,
	defense: Number,
	magicAttack: Number,
	magicDefense: Number,
	speed: Number,
	type: String,
	criticalChance: Number,
	criticalDamage: Number,
	evasion: Number,
	accuracy: Number,
	isEnemy: Boolean
});

module.exports = mongoose.model('Monster', MonsterSchema);
