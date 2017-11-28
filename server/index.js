var express = require("express");
var mongoose = require("mongoose");
var cookieSession = require("cookie-session");
var passport = require("passport");
var keys = require("./config/keys");
require("./models/User");
require("./services/passport");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
mongoose.connect(keys.mongoURI);

var app = express();
app.use(bodyParser.urlencoded());

/*var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "navdeepddn.97@gmail.com",
    pass: ""
  }
});

app.post("/home", function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.pass);
  console.log(req.body.stud);
});*/

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/mailRoutes")(app);

app.listen(4000, function() {
  // console.log("Express Started on Port 4000");
});
