module.exports = function(router){
	var TPL_Monster    = require('../app/models/tpl_monster');
	var ramdom     = require('mongoose-query-random');
	
	router.route('/tpl_monster/:id?')


	.post(function(req, res) {
		TPL_Monster.create(req.body, function(err, tpl_mosnter) {
            if (err){
                res.send(err);
			}
            res.send(tpl_mosnter);
        });
    })
	
	
	
	
	
	.get(function(req, res) {
		TPL_Monster.find(function(err, tpl_monsters) {
			if (err){
				res.send(err);
			}

			res.json(tpl_monsters);
		});
	})
	
	
	
	
	.delete(function(req, res) {
		TPL_Monster.findByIdAndRemove(req.params.id, function(err, tpl_mosnter) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	})
	
	
	
	
	
	.put(function(req, res) {
		TPL_Monster.update({_id:req.body._id}, 
			{
				Name: req.body.Name,
				Level: req.body.Level,
				Hp: req.body.Hp,
				Attack: req.body.Attack,
				Defense: req.body.Defense,
				MagicAttack: req.body.MagicAttack,
				MagicDefense: req.body.MagicDefense,
				Speed: req.body.Speed,
				Type: req.body.Type,
				CriticalChance: req.body.CriticalChance,
				CriticalDamage: req.body.CriticalDamage,
				Evasion: req.body.Evasion,
				Accuracy: req.body.Accuracy,
				IsEnemy: req.body.IsEnemy,
				SpriteName:req.body.SpriteName,
				Skills: req.body.Skills
			},  {multi: false}, function(err, tpl_mosnter) {
			if (err){
				res.send(err);
			}
			res.json(tpl_mosnter);
		});
	});

router.route('/tpl_monsters/random/number/:number')	
	.get(function(req, res) {
		TPL_Monster.find().random(req.params.number, true, function(err, monsters) {
			if (err){
				res.send(err);
			}
			res.json(monsters);
		});
	});
}