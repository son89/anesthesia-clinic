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
			database_npgsql pg = new database_npgsql ("127.0.0.1", "5432", "postgres", "M17511752gh", "postgres");
			pg.create ();

			// insert
			object patient_id;
			pg.open ();
			string temp_1 = "insert into patients_basic_informations values(default, '"
				+ name.Text
				+ "', '" + last_name.Text
				+ "', '" + email.Text
				+ "', '" + mobile_phone_number.Text
				+ "', 'null', '" + age.Text
				+ "', '" + weigth.Text + "', '" + height.Text
				+ "', true, '" + sex.SelectedValue
				+ "', '" + personl_id.Text + "') returning id;";
			NpgsqlCommand ins_command_1 = new NpgsqlCommand (temp_1, pg.get_connection);
			try
			{
				patient_id = ins_command_1.ExecuteScalar();
			}
			finally
			{
				pg.disconnect ();
			}

			pg.open ();
			string temp_2 = "insert into patients_ppo_from_informations values('" + patient_id.ToString ()
				+ "'," + operation.SelectedValue
				+ ");";
			NpgsqlCommand ins_command_2 = new NpgsqlCommand (temp_2, pg.get_connection);
			try
			{
				ins_command_2.ExecuteNonQuery();
			}
			finally
			{
				pg.disconnect ();
			}

			//Request.Form["username"], Request.Form["password"]
			//Response.Redirect("site/panel/doctor_panel.aspx");

		}
	}
}

