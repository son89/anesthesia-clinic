using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace clinik
{
	public partial class doctor_login : System.Web.UI.Page
	{
		protected void Page_PreRender(object sender, EventArgs e)
		{
			if( Session["is_valid"] == false.ToString() )
			{
				//div
				Panel wrong_password_div = new Panel();
				wrong_password_div.ID = "worng_password";
				wrong_password_div.CssClass = "form-group";
				//span
				Label wrong_password_span = new Label();
				wrong_password_span.Text = "پسورد اشتباه وارد شده است";
				wrong_password_span.CssClass = "label label-success box-shadow custom_label col-lg-12 col-md-12 col-sm-12 col-xs-12";
				wrong_password_div.Controls.Add (wrong_password_span);
				// add to doctor login form
				form_login.Controls.AddAt(0,wrong_password_div);
				//set focus
				form_login.Focus ();
				// clear session
				Session ["is_valid"] = null;
			}
		}
		public void btn_login_doctor_click(object sender, EventArgs e)
		{
			string[] informations;
			clinik_api d_i = new clinik_api();
			informations = d_i.doctor_information_with_username_password(Request.Form["username"], Request.Form["password"]);
			if( informations[3] == Request.Form["username"] && informations[4] == Request.Form["password"] )
			{
				Session["doctor_id"] = informations[0];
				Session["he_is_admin"] = "True";
				Response.Redirect( "../../panel/doctor_panel.aspx" );
			}
			else
			{
				Session["is_valid"] = false.ToString();
			}
		}
	}
}

