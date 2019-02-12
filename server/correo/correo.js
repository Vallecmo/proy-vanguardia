"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "pruebavanguardia5@gmail.com", // generated ethereal user
      pass: "PruebaVanguardia5" // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Milton Vallecillo" <orellanaoto@gmail.com>', // sender address
    to: "pruebavanguardia5@gmail.com", // list of receivers
    subject: "Prueba 1", // Subject line
    text: "Hola", // plain text body
    html: "<b>Esto es una prueba</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


}

main().catch(console.error);

