var express     = require("express"),
    ejs         = require("ejs"),
    nodeMailer  = require("nodemailer"),
    bodyParser  = require("body-parser"),
    
    nodemailer = require('nodemailer'),
    mg = require('nodemailer-mailgun-transport');


var auth = {
    auth: {
    api_key: '',
    domain: '',
  }
};

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES

app.get("/", function(req, res) {
    res.render("landing.ejs");
});

app.post('/send-email', function(req,res) {
    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

    nodemailerMailgun.sendMail({
        from: req.body.email,
        to: 'lunsworth@live.com',
        subject: req.body.subject,
        text: req.body.content,
    }, 
    function (err, info) {
        if (err) {
        console.log('Error: ' + err);
        } else {
        console.log('Response: ' + info);
        res.redirect('/');
    }
});
 
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started!");
});