const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const form = document.getElementById('contact-form');

const formEvent = form.addEventListener('submit' ,(event) => {
    event.preventDefault();

    let mail = new FormData(form);

    SendmailTransport(mail);
} )