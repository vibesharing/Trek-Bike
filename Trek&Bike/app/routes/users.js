// ROUTES TODOS
var Users = require('../models/user.js');
module.exports 	= function(app) {
	app.get('/users', Users.findAll);
	app.post('/users', Users.create);
	app.put('/users/:id', Users.update);
	app.delete('/users/:id', Users.delete);

}
