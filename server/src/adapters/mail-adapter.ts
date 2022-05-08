export interface SendMAilData {
  subject: string;
  body: string;
}

export interface MailAdapters {
  sendMail: (data: SendMAilData) => Promise<void>;
}