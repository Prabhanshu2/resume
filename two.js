const nodemailer= require('nodemailer');
const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"chaurasia2311@gmail.com",
        pass:"chaurasia123"
    }
});
const mailOptions={
    from:"chaurasia2311@gmail.com",
    to:"prabhanshuchaurasia2311@gmail.com",
    subject:"Nodemailer Test",
    text: "test sending"
}

transporter.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("email sent" + info.response);
    }
});
