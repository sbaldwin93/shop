
var Item = require('../models/items');

module.exports = {
	postItems: function(req, res) {
		var item = new Item(req.body);
		item.save();
		Item.find({}).exec(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems)
			}
		}
	)},
	getItems: function(req, res) {
		Item.find({}).exec(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems)
			}
		}
	)},
	deleteItems: function(req, res) {
		var id = req.params.id;
		Item.findOneAndRemove({_id: id}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(doc);
			}
		})
	}
}





