module.exports = function(router){
	var target    = require('../app/models/target');
	
	router.route('/target/:id?')


	.post(function(req, res) {
		console.log(req.body);
		target.create(req.body, function(err, target) {
            if (err){
                res.send(err);
			}
            res.send(target);
        });
    })
	
	
	
	
	
	.get(function(req, res) {
		target.find(function(err, target) {
			if (err){
				res.send(err);
			}
			res.json(target);
		});
	})
	
	
	
	
	.delete(function(req, res) {
		console.log(req.body);
		target.findByIdAndRemove(req.params.id, function(err, target) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	})
	
	
	
	
	
	.put(function(req, res) {
		target.update({_id:req.body._id}, 
			{
				Name: req.body.Name
			},  {multi: false}, function(err, target) {
			if (err){
				res.send(err);
			}
			res.json(target);
		});
	});

}