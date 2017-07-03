module.exports = function(router){
	var Monster    = require('../app/models/monster');
	var imgHelper    = require('./Helper/images');
	
router.route('/monster/images')
	.get(function(req, res) {
		res.header('Access=Control-Allow-Origin', '*');
		imgHelper.getImages(function (err, files) {
             res.send(files);
        });
	})
	
	
	
router.route('/monsters')

    // create a monster 
    .post(function(req, res) {
		Monster.create(req.body, function(err, mosnter) {
            if (err){
                res.send(err);
			}
            res.send(mosnter);
        });
    })
	
	
	 // Update a monster based on Id
    .put(function(req, res) {
		console.log(req.body);
		var result;
		if(Array.isArray(req.body)){
			req.body.forEach(function(monster) {
				Monster.update({ '_id': monster.Id }, { $set:  { 'Selected': monster.Selected }}, function(err, monster) {
					if (err){
						result = err;
					}
					
				});
			});
		}else{
			Monster.update({ '_id': req.body.Id }, { $set:  { 'Selected': req.body.Selected }}, function(err, monster) {
				if (err){
					result = err;
				}
				
			});
		}
		if(result){
			res.send(result);
		}else{
			res.send(req.body);
		}
		
    })
        
	// get all the monsters
    .get(function(req, res) {
		Monster.find(function(err, monsters) {
			if (err){
				res.send(err);
			}
			res.json(monsters);
        });
    });


router.route('/monsters/selected/user/:userId')
	.get(function(req, res) {
		Monster.find({ UserId: req.params.userId, "Selected": true }, function(err, monster) {
			if (err){
				res.send(err);
			}
			res.json(monster);
		});
	})

		
router.route('/monsters/user/:userId')
	.get(function(req, res) {
		Monster.find({ UserId: req.params.userId }, null, { sort: {'Position':'asc'}}, function(err, monster) {
			if (err){
				res.send(err);
			}
			res.json(monster);
		});
	})	
	

	
	
	
	
router.route('/monsters/:monster_id')

	// get the monster by id
	.get(function(req, res) {
		Monster.findById(req.params.monster_id, function(err, monster) {
			if (err){
				res.send(err);
			}
			res.json(monster);
		});
	})
	
	
	// update the monster by id
	.put(function(req, res) {
    
		Monster.findById(req.params.monster_id, function(err, monster) {
			if (err){
				res.send(err);
			}
			monster.name = req.body.name; 
			// save the monster
			monster.save(function(err) {
				if (err){
					res.send(err);
				}
				res.json({ message: 'Monster updated!' });
			});
		});
	})
	
	
	// delete the monster by id
	.delete(function(req, res) {
		Monster.remove({
			_id: req.params.monster_id
		}, function(err, monster) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	});

}