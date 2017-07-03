module.exports = function(router){
	var type    = require('../app/models/type');
	
	router.route('/type/:id?')


	.post(function(req, res) {
		type.create(req.body, function(err, type) {
            if (err){
                res.send(err);
			}
            res.send(type);
        });
    })
	
	
	
	
	
	.get(function(req, res) {
		type.find(function(err, type) {
			if (err){
				res.send(err);
			}
			res.json(type);
		});
	})
	
	
	
	
	.delete(function(req, res) {
		console.log(req.body);
		type.findByIdAndRemove(req.params.id, function(err, type) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	})
	
	
	
	
	
	.put(function(req, res) {
		type.update({_id:req.body._id}, 
			{
				Name: req.body.Name,
				baseAtribute: req.body.baseAtribute
			},  {multi: false}, function(err, type) {
			if (err){
				res.send(err);
			}
			res.json(type);
		});
	});

}