using System;
using System.Net;
using System.Net.Mail;

namespace clinik
{
	public class mail
	{
		public mail ()
		{
		}
		public void send_by_gmail(string destenition,string email_subject)
		{
			MailAddress fromAddress = new MailAddress("masoud.ghrbzh@gmail.com", "From masoud");
			MailAddress toAddress = new MailAddress(destenition, "To masoud");
			string fromPassword = "masoudsam";
			string subject = email_subject;
			string body = "mono c# test";

			SmtpClient smtp = new SmtpClient
			{
				Host = "smtp.gmail.com",
				Port = 587,
				EnableSsl = true,
				DeliveryMethod = SmtpDeliveryMethod.Network,
				UseDefaultCredentials = false,
				Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
			};
			MailMessage message = new MailMessage (fromAddress, toAddress) 
			{
				Subject = subject,
				Body = body
			};
			smtp.Send(message);
		}
		public void send_by_mail(string destenition,string email_subject)
		{
			MailAddress fromAddress = new MailAddress("m.gh@linuxmail.org", "From masoud");
			MailAddress toAddress = new MailAddress(destenition, "To masoud");
			string fromPassword = "M17511752gh";
			string subject = email_subject;
			string body = "mono c# test";

			SmtpClient smtp = new SmtpClient
			{
				Host = "smtp.mail.com",
				Port = 587,
				EnableSsl = true,
				DeliveryMethod = SmtpDeliveryMethod.Network,
				UseDefaultCredentials = false,
				Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
			};
			MailMessage message = new MailMessage (fromAddress, toAddress) 
			{
				Subject = subject,
				Body = body
			};
			smtp.Send(message);
		}
	}
}

