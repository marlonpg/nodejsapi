module.exports = function(router){
	var User       = require('../app/models/user');

	router.route('/user/id/:userId')
		.get(function(req, res) {
			User.findById(req.params.userId, function(err, user) {
				if (err){
					res.send(err);
				}
				res.send(user);
		});
	})
	
}