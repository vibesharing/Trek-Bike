// MODEL TREK
var mongoose = require('mongoose');
var trekSchema = new mongoose.Schema({
  description: String
});
var Trek = {

    model: mongoose.model('Trek', trekSchema),

    create: function(req, res) {
		Trek.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Trek.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Trek.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Trek.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Trek;
