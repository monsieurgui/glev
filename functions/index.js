const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.sendEmail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "guillaume.beremus@gmail.com",
      pass: "armaged0N!",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "guillaume.beremus@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});
