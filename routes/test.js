var express = require('express');
var router = express.Router();
var fs = require( 'fs' );

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile( './routes/pages/hello.html' ,null , function (error , data) {
        if(error)
        {
            res.write('File Not Found');
        }
        else
        {
            res.write(data);
        }
        res.end();
    });

});

router.post ( '/submitInTest' , function ( req , res , next ){

    console.log('in post function');
    console.log(req.param('text_input_name'));
    console.log(req.param('text_input_password'));
    res.redirect('/');
});

module.exports = router;
