var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TPL_MonsterSchema   = new Schema({
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
	Skills: []
});



module.exports = mongoose.model('TPL_Monster', TPL_MonsterSchema);
