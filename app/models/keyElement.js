var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var KeyElemenetSchema   = new Schema({
    Name:  { type: String}
});

module.exports = mongoose.model('KeyElement', KeyElemenetSchema);
