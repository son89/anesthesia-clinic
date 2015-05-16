using System;
using System.Web;
using System.Web.UI;

namespace clinik
{
	public partial class doctor_login : System.Web.UI.Page
	{
		public void btn_login_doctor_click(object sender, EventArgs e)
		{
			database_npgsql pg = new database_npgsql("127.0.0.1", "5432", "postgres", "1", "postgres");
			pg.create();
			pg.open();
			clinik_api d_v = new clinik_api();
			bool is_valid = d_v.doctor_validation(Request.Form["username"], Request.Form["password"],pg.get_connection);
			if(is_valid == true)
			{
				Session["username"] = Request.Form["username"];
				Session["password"] = Request.Form["password"];
				Response.Redirect("site/panel/doctor_panel.aspx");
			}

			pg.disconnect();
		}
	}
}

