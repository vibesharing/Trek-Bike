// ROUTES TODOS
var Weathers = require('../models/weather.js');
module.exports 	= function(app) {
	app.get('/weathers', Weathers.findAll);
	app.post('/weathers', Weathers.create);
	app.put('/weathers/:id', Weathers.update);
	app.delete('/weathers/:id', Weathers.delete);

}
