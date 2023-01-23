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
  to: 'arpitdobariya23@gmail.com',
  subject: '20BCP023 : Bhut Tushar : Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent succesfully');
  }
});