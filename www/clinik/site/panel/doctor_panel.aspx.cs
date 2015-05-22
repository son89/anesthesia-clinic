using System;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	public partial class doctor_panel : System.Web.UI.Page
	{
		protected void Page_Load( object sender , EventArgs e )
		{
			if( Session["he_is_admin"] == null )
			{
				Response.Redirect("../logins/doctor_login/doctor_login.aspx");
			}
			else if( Session["he_is_admin"] == "True" )
			{
				database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "1", "postgres");
				pg.create();
				pg.open ();

				clinik_api d_i = new clinik_api();
				string[] doctor_inf = d_i.doctor_information( Session["username"].ToString() , Session["password"].ToString() , pg.get_connection );
				pg.disconnect();

				name_family_label.Text = "<i class=\"fa fa-user\"></i>";
				name_family_label.Text += " " + doctor_inf[0] + " " + doctor_inf[1];
				name_family_label.Text += " <b class=\"caret\"></b>";
			}
		}
	}
}

