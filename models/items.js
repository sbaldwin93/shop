var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
	name            : {type: String, required: true},
	quantity        : {type: String},
	type            : {type: String},
	userId          : String
});

var Item = mongoose.model('item', itemSchema);
module.exports = Item;