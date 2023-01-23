const nodemailer = require("nodemailer");
const fs = require('fs')

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bhuttushar2019@gmail.com",
    pass: "qzwrnmwfwlhleujn",
  },
});

let imageContent = fs.readFileSync("content-image.jpg");
let imageBackground = fs.readFileSync("background-image.jpg");

let mailOptions = {
  from: "bhuttushar2019@gmail.com",
  to: "bhuttushar007@gmail.com",
  subject: "20BCP023 : Bhut Tushar : Sending Email using Node.js",
  html: `
  <div style="text-align: center;">
  <div style="background-image: url(cid:background);">
      <img src="cid:content" alt="content-image; margin: 0 auto">
  </div>
  </div>
`,
  attachments: [
    {
      // content image as attachment
      filename: "content-image.jpg",
      content: imageContent,
      cid: "content",
    },
    {
      // background image as attachment
      filename: "background-image.jpg",
      content: imageBackground,
      cid: "background",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent succesfully");
  }
});
