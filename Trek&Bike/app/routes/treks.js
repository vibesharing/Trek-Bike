// ROUTES TODOS
var Treks = require('../models/trek.js');
module.exports 	= function(app) {
	app.get('/treks', Treks.findAll);
	app.post('/treks', Treks.create);
	app.put('/treks/:id', Treks.update);
	app.delete('/treks/:id', Treks.delete);

}
