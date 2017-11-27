var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
module.exports = app => {
  /* app.post("/login/trial", function(req, res) {
    app.use(bodyParser.urlencoded());
    global mail = req.body.email;
    global passwd = req.body.password;
    /*app.set("mail", req.body.email);
    app.set("pass", req.body.password);
    consoole.log("-----------------------------");
    console.log(app.get("mail"));
    console.log(app.get("pass"));
  });*/

  app.post("/admin/home", function(req, res, next) {
    app.use(bodyParser.urlencoded());

    console.log(req.body.stud);
    var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: req.body.mail,
        pass: req.body.pass
      }
    });

    var mailOptions = {
      to: req.body.stud,
      subject: "Test Mail",
      text: "Hey ! This is a test mail."
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + mailOptions.text);
        res.end("sent");
      }
    });
  });
};
