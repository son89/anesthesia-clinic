using System;
using System.Data;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	
	public partial class patient_form : System.Web.UI.Page
	{
		public void btn_send_clicked( object sender, EventArgs e )
		{
			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "M17511752gh", "postgres");
			pg.create();

			// insert
			pg.open();
			string temp = "insert into patients_basic_informations values(DEFAULT, '" + name.Text + "', '" + last_name.Text + "', '" + email.Text + "', '" + mobile_phone_number.Text + "', 'null', '" + age.Text + "', '" + weigth.Text + "', '" + height.Text + "', true, '" + sex.SelectedValue + "', '" + personl_id.Text + "');";
			NpgsqlCommand ins_command = new NpgsqlCommand(temp, pg.get_connection);

			try
			{
				ins_command.ExecuteNonQuery();
			}
			finally
			{
				pg.disconnect();
			}


			// select
			pg.open();
			string getdata = "select id from patients_basic_informations where name = '" + name.Text + "' and family = '" + last_name.Text + "';";
			NpgsqlCommand select_command = new NpgsqlCommand (getdata, pg.get_connection);
			try
			{
				NpgsqlDataReader dr = select_command.ExecuteReader();
				while (dr.Read())
				{
					for (int i = 0; i < dr.FieldCount; i++)
					{
						Console.Write ("{0} \t", dr[i]);
					}
					Console.WriteLine ();
				}
			}
			finally
			{
				pg.disconnect();
			}
			//Request.Form["username"], Request.Form["password"]
			//Response.Redirect("site/panel/doctor_panel.aspx");

		}
	}
}

