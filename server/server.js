process.env.MAIL_URL="smtp://comsatsvc%40gmail.com:vccomsats12@smtp.gmail.com:465/";


Email.send({
  from: "meteor.email.2014@gmail.com",
  to: "E-agriculture",
  subject: "Meteor Can Send Emails via Gmail",
  text: "Its pretty easy to send emails via gmail."
});