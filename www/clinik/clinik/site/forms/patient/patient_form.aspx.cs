using System;
using System.Data;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	
	public partial class patient_form : System.Web.UI.Page
	{
		public void btn_send_clicked(object sender, EventArgs e)
		{
			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "M17511752gh", "postgres");
			pg.connect();

			string temp = "insert into patient values(DEFAULT, '" + name.Text + "', '" + last_name.Text + "', '" + email.Text + "', '" + mobile_phone_number.Text + "', 'null', '" + age.Text + "', '" + weigth.Text + "', '" + height.Text + "', true, '" + sex.SelectedValue + "', '" + personl_id.Text + "')";
			NpgsqlCommand command = new NpgsqlCommand(temp, pg.get_connection);

			try
			{
				command.ExecuteNonQuery();
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

