using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

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
					Session["username"] = Request.Form["username"];
					Session["password"] = Request.Form["password"];
					Session["he_is_admin"] = "True";
					Response.Redirect( "site/panel/doctor_panel.aspx" );
				}
				else if( Session["is_valid"] == "False" )
				{
					//div
					Panel wrong_password_div = new Panel();
					wrong_password_div.ID = "worng_password";
					wrong_password_div.CssClass = "form-group";
					//span
					Label wrong_password_span = new Label();
					wrong_password_span.Text = "پسورد اشتباه وارد شده است";
					wrong_password_span.CssClass = "label label-success box-shadow custom_label col-lg-12";
					wrong_password_div.Controls.Add (wrong_password_span);
					// add to doctor form
					doctor_form.Controls.AddAt(0,wrong_password_div);
					//set focus
					doctor_form.Focus ();
					// clear session
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

 