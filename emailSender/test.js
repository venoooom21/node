const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'meddebnourhen21@gmail.com', 
        pass: 'whenimgone'       
    }
});


let mailOptions = {
    from: 'meddebnourhen21@gmail.com', 
    to: 'khaldikhaldighada@gmail.com',            
    subject: 'checkpoint  test',
    text: 'it is checkpoint test',                   
    html: '<b>Hello world</b>'           
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    else{
        console.log('Message sent: ', info.response);
    }

   
});