var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MonsterByUserSchema   = new Schema({
    id_user: Number,
	id_monster: [{id: Number}]
});

module.exports = mongoose.model('MonsterByUser', MonsterByUserSchema);
