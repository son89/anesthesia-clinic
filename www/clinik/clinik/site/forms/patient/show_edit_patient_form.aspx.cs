using System;
using System.Web;
using System.Web.UI;

namespace clinik
{
	
	public partial class show_edit_patient_form : System.Web.UI.Page
	{
		/*
			// select
		pg.open ();
		string getdata = "select id from patients_basic_informations where name = '" + name.Text + "' and family = '" + last_name.Text + "' and email = '" + email.Text + "' and mobile              ;";
		NpgsqlCommand select_command = new NpgsqlCommand (getdata, pg.get_connection);
		try
		{
			NpgsqlDataReader dr = select_command.ExecuteReader ();
			while (dr.Read ())
			{
				for (int i = 0; i < dr.FieldCount; i++)
				{
					dr [i].ToString ();
					string log_path = "/home/masoud/temp/mono.log";
					using (System.IO.StreamWriter fi = System.IO.File.AppendText (log_path))
					{
						fi.WriteLine (dr [i].ToString ());
					}
				}
				Console.WriteLine ();
			}
		}
		finally
		{
			pg.disconnect ();
		}
		*/
	}
}

