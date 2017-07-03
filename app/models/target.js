var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TargetSchema   = new Schema({
    Name:  { type: String}
});

module.exports = mongoose.model('Target', TargetSchema);
