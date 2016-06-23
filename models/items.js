//var mongoose = require('mongoose');
//module.exports = mongoose.model('Item', {
//	name: {type: String, required: true},
//	quantity: {type: String},
//	userSubmitted: {type: Schema.Types.ObjectId, ref: 'user'}
	
//});


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: {type: String, required: true},
	quantity: {type: String},
	userSubmitted: {type: Schema.Types.ObjectId, ref: 'user'}
});

var Item = mongoose.model('item', itemSchema);
module.exports = Item;