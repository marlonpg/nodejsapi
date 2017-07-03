module.exports = function(router){
	router.route('/rename')
	.get(function(req, res) {
		var query = TPL_Monster.find({  });
		query.exec(function (err, monsters) {
			if (err) return handleError(err);
			monsters.forEach(function(item) {
				var Skills = item.get('Skills');
				for(i = 0; i != Skills.length; ++i)
				{
					Skills[i].Accuracy = Skills[i].accuracy;
					Skills[i].BaseAttribute = Skills[i].baseAttribute;
					Skills[i].BaseDamage = Skills[i].baseDamage;
					Skills[i].Type = Skills[i].type;
					delete Skills[i].accuracy;
					delete Skills[i].baseAttribute;
					delete Skills[i].baseDamage;
					delete Skills[i].type;
				}
				item.set('Skills',Skills);
				console.log(item.get('_id'));
				var id = item.get('_id');
				delete item['_id'];
				console.log(item.get('_id'));
				TPL_Monster.update({'_id': id}, item, function(err, monster) {
					if (err)
						console.log(err);
					console.log(monster);
				});
			});
		});
		res.send("Success");
	});

}