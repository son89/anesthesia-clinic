using System;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using System.Security.Cryptography;


namespace clinik
{
	public partial class main : System.Web.UI.Page
	{
		protected void Page_LoadComplete(object sender, EventArgs e)
		{
			if( Session["is_valid"] != null )
			{
				if( Session["is_valid"] == "True" )
				{
					Session["is_valid"] = null;
					Response.Redirect( "site/panel/doctor_panel.aspx" );
				}
				else if( Session["is_valid"] == "False" )
				{
					ClientScript.RegisterStartupScript(GetType(), "key", "wrong_username_or_password();", true);
					Session["is_valid"] = "True";
				}
			}
		}
		public void register_patient_form_clicked(object sender, EventArgs e)
		{
			Response.Redirect("site/forms/patient/patient_form.aspx");
		}
		public void btn_show_edit_patient_form_clicked(object sender, EventArgs e)
		{
			Response.Redirect("site/logins/patient_login/patient_login.aspx");
		}
		public void btn_login_doctor_click(object sender, EventArgs e)
		{
			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "1", "postgres");
			pg.create();
			pg.open ();

			clinik_api d_v = new clinik_api();
			bool is_valid = d_v.doctor_validation(Request.Form["username"], Request.Form["password"],pg.get_connection);
			Session["is_valid"] = is_valid.ToString();
			pg.disconnect();
		}
	}

}

 