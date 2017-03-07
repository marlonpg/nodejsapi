// call the packages we need
var express    = require('express');
var app        = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Monster    = require('./app/models/monster');
var User       = require('./app/models/user');
var TPL_Monster    = require('./app/models/tpl_monster');
var path = require('path');
var fs    = require('fs');


app.use(express.static('./static'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Set the environment variables we need.
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

function getImages(imageDir, callback) {
    var fileType = '.png',
        files = [], i;
    fs.readdir(imageDir, function (err, list) {
        for(i=0; i<list.length; i++) {
            if(path.extname(list[i]) === fileType) {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}

if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
};
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// on routes that end in /users
// ----------------------------------------------------
router.route('/users/:user*?')
// create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {
		User.create(req.body, function(err, user) {
            if (err)
                res.send(err);

            res.send(user);
        });
    })
        // get all the monsters (accessed at GET http://localhost:8080/api/users)
    .get(function(req, res) {
		if(req.params.user){
			User.find({"user": new RegExp('\\b' + req.params.user + '\\b', 'i')}, function(err, user) {
				if (err)
					res.send(err);
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
	
	// delete the user with this user NAme (accessed at DELETE http://localhost:8080/api/users/:user)
	.delete(function(req, res) {
		if(req.params.user){
			User.remove({
				user: req.params.user
			}, function(err, user) {
				if (err)
					res.send(err);
				res.send(user);
			});
		}else{
			res.json({ message: 'User missing' });
		}
	})
	
	.put(function(req, res) {
		if(req.params.user){
			// use our user model to find the monster we want
			User.update({"user":req.params.user},req.body, function(err, user) {
				if (err)
					res.send(err);
				res.send(user);
			});
		}else{
			res.json({ message: 'user missing!' });
		}
	})


router.route('/users/id/0:userId')
	.get(function(req, res) {
		User.findById(req.params.userId, function(err, user) {
			 if (err)
				res.send(err);
			res.send(user);
		});
	})
	
router.route('/monster/images')
	.get(function(req, res) {
		res.header('Access=Control-Allow-Origin', '*');
		var imageDir = './static/Monsters';
		getImages(imageDir, function (err, files) {
             res.send(files);
        });
	})
// on routes that end in /monsters
// ----------------------------------------------------
router.route('/tpl_monster')
	.post(function(req, res) {
		console.log(req.body);
		TPL_Monster.create(req.body, function(err, tpl_mosnter) {
            if (err)
                res.send(err);
            res.send(tpl_mosnter);
        });
    })


router.route('/monsters')

    // create a monster (accessed at POST http://localhost:8080/api/monsters)
    .post(function(req, res) {
		Monster.create(req.body, function(err, mosnter) {
            if (err)
                res.send(err);
            res.send(mosnter);
        });
    })
	
	 // create a monster (accessed at PUT http://localhost:8080/api/monsters)
    .put(function(req, res) {
		Monster.update({ '_id': req.body.Id }, { $set:  { 'Selected': req.body.Selected }}, function(err, mosnter) {
			 
            if (err){
                res.send(err);
			}else{
				res.send(mosnter);
			}
            
        });
    })
        // get all the monsters (accessed at GET http://localhost:8080/api/monsters)
        .get(function(req, res) {
            Monster.find(function(err, monsters) {
                if (err)
                    res.send(err);

                res.json(monsters);
            });
        });
		
router.route('/monsters/user/:userId')
.get(function(req, res) {
    Monster.find({ UserId: req.params.userId }, function(err, monster) {
        if (err)
            res.send(err);
        res.json(monster);
    });
})
		
// on routes that end in /monsters/:monster_id
// ----------------------------------------------------
router.route('/monsters/:monster_id')

// get the monster with that id (accessed at GET http://localhost:8080/api/monsters/:monster_id)
.get(function(req, res) {
    Monster.findById(req.params.monster_id, function(err, monster) {
        if (err)
            res.send(err);
        res.json(monster);
    });
})
// update the monster with this id (accessed at PUT http://localhost:8080/api/monsters/:monster_id)
.put(function(req, res) {

    // use our monster model to find the monster we want
    Monster.findById(req.params.monster_id, function(err, monster) {

        if (err)
            res.send(err);

        monster.name = req.body.name;  // update the monsters info

        // save the monster
        monster.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Monster updated!' });
        });

    });
})
// delete the monster with this id (accessed at DELETE http://localhost:8080/api/monsters/:monster_id)
.delete(function(req, res) {
    Monster.remove({
        _id: req.params.monster_id
    }, function(err, monster) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
//  Start the app on the specific interface (and port).
app.listen(port, ipaddress, function() {
     console.log('%s: Node server started on %s:%d ...',
    Date(Date.now() ), ipaddress, port);
});


var connection_string = '127.0.0.1:27017/nodejsapi';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}
mongoose.connect('mongodb://'+connection_string); // connect to our database
