import { MailAdapters, SendMAilData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "64edfb97d3248e",
    pass: "716c178e5296da"
  }
});


export class NodemailerMailAdapter implements MailAdapters {
  async sendMail({ subject, body }: SendMAilData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedback.com>',
      to: 'Anderson Ângelo <andchip@gmail.com>',
      subject,
      html: body,
    })


  };
}