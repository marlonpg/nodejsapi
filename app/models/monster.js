var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MonsterSchema   = new Schema({
    Name: String,
	Level: Number,
	Hp: Number,
	Attack: Number,
	Defense: Number,
	MagicAttack: Number,
	MagicDefense: Number,
	Speed: Number,
	Type: String,
	CriticalChance: Number,
	CriticalDamage: Number,
	Evasion: Number,
	Accuracy: Number,
	IsEnemy: Boolean,
	SpriteName:String,
	UserId:String,
	Selected: Boolean,
	skills: []
});



module.exports = mongoose.model('Monster', MonsterSchema);
