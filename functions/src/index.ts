import * as functions from "firebase-functions";
import { db } from "./firebase";
import nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const CONTACT_MAIL = "contact@manishk.dev";

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: CONTACT_MAIL,
        subject: `Someone just messaged you from your website`,
        text: req.body.message,
        html: `<h1>${req.body.name}</h1><p>${req.body.message}</p>`,
      };

      return mailTransport.sendMail(mailOptions).then(async () => {
        console.log("New query sent to:", CONTACT_MAIL);
        res.status(200).send({
          isEmailSend: true,
        });
        await db.collection("emails").add({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
          time: new Date(),
        });
        return;
      });
    });
  }
});
