// call the packages we need
var express    = require('express');
var app        = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

app.use(express.static('./static'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Set the environment variables we need.
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddress === "undefined") {
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
};

var router = express.Router();       
require('./routes/users')(router);
require('./routes/user')(router);
require('./routes/tpl_monster')(router);
require('./routes/utilities')(router);
require('./routes/monster')(router);
require('./routes/type')(router);
require('./routes/target')(router);
require('./routes/keyElement')(router);

app.use('/api', router);

app.listen(port, ipaddress, function() {
     console.log('%s: Node server started on %s:%d ...',
    Date(Date.now() ), ipaddress, port);
});


var connection_string = '127.0.0.1:27017/nodejsapi';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}
mongoose.connect('mongodb://'+connection_string); // connect to our database
