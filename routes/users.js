module.exports = function(router){
	var User       = require('../app/models/user');
	
	router.route('/users/:user*?')
	
	
	// create a user
    .post(function(req, res) {
		User.create(req.body, function(err, user) {
            if (err){
				res.send(err);
			}
            res.send(user);
        });
    })
    
	
	// get all the monsters based on a user
    .get(function(req, res) {
		if(req.params.user){
			User.find({"user": new RegExp('\\b' + req.params.user + '\\b', 'i')}, function(err, user) {
				if (err){
					res.send(err);
				}
				res.json(user[0]);
			});
		}else{
			User.find(function(err, users) {
				if (err)
					res.send(err);
				res.json(users);
			});
		}
    })
	
	
	
	
	// delete the user with this user Name
	.delete(function(req, res) {
		if(req.params.user){
			User.remove({
				user: req.params.user
			}, function(err, user) {
				if (err){
					res.send(err);
				}
				res.send(user);
			});
		}else{
			res.json({ message: 'User missing' });
		}
	})
	
	
	
	// update an user 
	.put(function(req, res) {
		if(req.params.user){
			User.update({"user":req.params.user},req.body, function(err, user) {
				if (err){
					res.send(err);
				}
				res.send(user);
			});
		}else{
			res.json({ message: 'user missing!' });
		}
	})
}