using System;
using System.Web;
using System.Web.UI;

namespace clinik
{
	
	public partial class patient_login : System.Web.UI.Page
	{
		protected void Page_LoadComplete(object sender, EventArgs e)
		{
			
		}
		public void btn_trace_code_clicked(object sender, EventArgs e)
		{
			clinik_api p_v = new clinik_api();
			string id = p_v.get_id_with_trace_code(Request.Form["password"]);
		}
	}
}

