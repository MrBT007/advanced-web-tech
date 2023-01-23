const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhuttushar2019@gmail.com',
    pass: 'udlhnmdzmctuksrq'
  }
});

let mailOptions = {
  from: 'bhuttushar2019@gmail.com',
  to: 'bhuttushar007@gmail.com',
  subject: '20BCP023 : Bhut Tushar : Sending Email using Node.js',
  html: '<div style="text-align:center"><div style="background-color:#f2f1f6; padding:30px;"><h1>Forgot your Password</h1><p>Please click here to reset your password</p></div><button style="background-color:#36bdc6; border-color:blanchedalmond; color:white; padding:10px;margin-top:10px; border-radius:5px;">Reset Password</button></div>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent succesfully");
  }
});