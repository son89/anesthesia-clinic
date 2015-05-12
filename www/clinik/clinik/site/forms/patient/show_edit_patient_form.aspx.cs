using System;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	
	public partial class show_edit_patient_form : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			string trace_code;
			if (Session ["trace_code"] != null)
			{
				trace_code = Session ["trace_code"].ToString();
			}
			else
			{
				trace_code = Request ["trace_code"].ToString();
			}

			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "1", "postgres");
			pg.create();
			pg.open ();

			string getdata = "select id from patients_basic_informations where trace_code = '" + trace_code + "';";
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
		}
		
		/* // select
		using (System.IO.StreamWriter fi = System.IO.File.AppendText (log_path))
		{
			fi.WriteLine (Session["trace_code"]);
		}
		*/
	}
}

