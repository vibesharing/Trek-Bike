// MODEL WEATHER
var mongoose = require('mongoose');
var weatherSchema = new mongoose.Schema({
  description: String
});
var Weather = {

    model: mongoose.model('Weather', weatherSchema),

    create: function(req, res) {
		Weather.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Weather.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Weather.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Weather.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Weather;
