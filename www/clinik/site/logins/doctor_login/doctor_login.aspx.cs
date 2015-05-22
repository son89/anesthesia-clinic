using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace clinik
{
	public partial class doctor_login : System.Web.UI.Page
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
					Response.Redirect( "../../panel/doctor_panel.aspx" );
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
					// add to doctor login form
					form_login.Controls.AddAt(0,wrong_password_div);
					//set focus
					form_login.Focus ();
					// clear session
					Session["is_valid"] = "True";
				}
			}
		}
		public void btn_login_doctor_click(object sender, EventArgs e)
		{
			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "1", "postgres");
			pg.create();
			pg.open();
			clinik_api d_v = new clinik_api();
			bool is_valid = d_v.doctor_validation(Request.Form["username"], Request.Form["password"],pg.get_connection);
			Session["is_valid"] = is_valid.ToString();
			pg.disconnect();
		}
	}
}

