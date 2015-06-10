using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace clinik
{
	public partial class main : System.Web.UI.Page
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
				wrong_password_div.Controls.Add( wrong_password_span );
				// add to doctor form
				doctor_form.Controls.AddAt( 0 , wrong_password_div );
				//set focus
				doctor_form.Focus();
				// clear session
				Session["is_valid"] = null;
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
			string[] informations;
			clinik_api d_i = new clinik_api();
			informations = d_i.doctor_information_with_username_password(Request.Form["username"], Request.Form["password"]);
			if( informations[3] == Request.Form["username"] && informations[4] == Request.Form["password"] )
			{
				Session["doctor_id"] = informations[0];
				Session["he_is_admin"] = "True";
				Response.Redirect( "site/panel/doctor_panel.aspx" );
			}
			else
			{
				Session["is_valid"] = false.ToString();
			}
		}
	}
}