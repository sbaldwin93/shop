var Item = require('../models/items');

module.exports = {
	postItems: function(req, res) {
		var items = new Item({
			name: req.body.name,
			quantity: req.body.quantity,
			type: req.body.type,
			userId: req.user._id
		});
		items.save(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems);
			}
		})
	},
	getItems: function(req, res) {
		Item.find({userId: req.user._id}).exec(function(err, allItems) {
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
};





