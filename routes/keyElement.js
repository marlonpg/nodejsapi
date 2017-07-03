module.exports = function(router){
	var keyElement    = require('../app/models/keyElement');
	
	router.route('/keyElement/:id?')


	.post(function(req, res) {
		console.log(req.body);
		keyElement.create(req.body, function(err, keyElement) {
            if (err){
                res.send(err);
			}
            res.send(keyElement);
        });
    })
	
	
	
	
	
	.get(function(req, res) {
		keyElement.find(function(err, keyElement) {
			if (err){
				res.send(err);
			}
			res.json(keyElement);
		});
	})
	
	
	
	
	.delete(function(req, res) {
		console.log(req.body);
		keyElement.findByIdAndRemove(req.params.id, function(err, keyElement) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	})
	
	
	
	
	
	.put(function(req, res) {
		keyElement.update({_id:req.body._id}, 
			{
				Name: req.body.Name
			},  {multi: false}, function(err, keyElement) {
			if (err){
				res.send(err);
			}
			res.json(keyElement);
		});
	});

}