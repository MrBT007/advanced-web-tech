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
  html: '<p>This is Attachment</p>',
  attachments: [
    {
        filename: 'randomNums.txt',
        path: 'E:\\Advanced Web\\randomNums.txt'
    }
]

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent succesfully");
  }
});