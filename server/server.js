const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const sendEmail = async (req, res) => {
  const { email, callBackTime, callBackDate, name, phoneNumber } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "moh.hesham.f@gmail.com",
      pass: "tkmjksdgjrwqcgir",
    },
  });

  const mailOptions = {
    from: email,
    to: "moh.hesham.f@gmail.com",
    subject: `REQUEST A CALL BACK`,
    html: `
    <b> REQUEST A CALL BACK <br/>

      <b>Name: </b> ${name}<br/>
      <b>Email: </b> ${email}<br/>
      <b>Call Back Date: </b> ${callBackDate}<br/>
      <b>Call Back Time: </b> ${callBackTime}<br/>
      <b>Phone number is</b> ${phoneNumber}`,
  };

  await transporter.sendMail(mailOptions);

  res.status(201).json({
    success: true,
    message: "Email has been sent successfully",
  });
};

app.post("/api/sendEmail", sendEmail);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
