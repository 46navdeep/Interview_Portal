var nodemailer = require("nodemailer");
module.exports = app => {
  app.post("/home", function(req, res, next) {
    console.log(req.body.email);
    console.log(req.body.pass);
    console.log(req.body.stud);

    var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: req.body.email,
        pass: req.body.pass
      }
    });

    var mailOptions = {
      to: req.body.stud,
      subject: "Maine bheja",
      text: "hey hey"
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + response.message);
        res.end("sent");
      }
    });
  });
};
