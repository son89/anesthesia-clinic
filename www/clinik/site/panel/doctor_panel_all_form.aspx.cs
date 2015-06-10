using System;
using System.Web;
using System.Web.UI;

namespace clinik
{
	public partial class doctor_panel_all_form : System.Web.UI.Page
	{
		protected void Page_Load( object sender , EventArgs e )
		{
			if( Session["he_is_admin"] == null )
			{
				Response.Redirect("../logins/doctor_login/doctor_login.aspx");
			}
			else if( Session["he_is_admin"] == "True" )
			{
				clinik_api d_i = new clinik_api();
				string[] doctor_inf = d_i.doctor_information_with_doctor_id( Session["doctor_id"].ToString() );

				name_family_label.Text = "<i class=\"fa fa-user\"></i>";
				name_family_label.Text += " " + doctor_inf[1] + " " + doctor_inf[2];
				name_family_label.Text += " <b class=\"caret\"></b>";
			}
		}
	}
}

