var express = require('express');
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    name: {type: String, required: true},
    lastName: String,
    password: String
});

var userData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readFile('./routes/pages/hello.html', null, function (error, data) {
        if (error) {
            res.write('File Not Found');
        }
        else {
            res.write(data);
        }
        res.end();
    });

});

router.post('/submit', function (req, res, next) {

    var item = {
        username: req.param('text_input_name'),
        password: req.param('text_input_password')
    };

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('user-data').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log(item.username);
            console.log(item.password);
            console.log('item inserted');
            db.close();
        })
    });

    res.redirect('/');
});

router.get('/insertUser', function (req, res, next) {
    var newUser = {
        name: req.param('n'),
        lastName: req.param('l'),
        password: req.param('p')
    }

    var data = new userData(newUser);
    data.save();

    res.end();
});

router.get('/getAllUsers', function (req,res,next) {

    userData.find(function (err, users){

        res.writeHead(200,{'Content-Type' : 'text/html'});

        for (i = 0; i < users.length; i++) {
            res.write(users[i].name);
            res.write('  ');
            res.write(users[i].lastName);
            res.write('<br/>');
        }
        res.end();
    });

});

router.get('/welcomeEJS' , function ( req, res , next ){
    res.render('page', { title: 'Ahmad' , pageName : 'welcome Page'});
});

module.exports = router;
