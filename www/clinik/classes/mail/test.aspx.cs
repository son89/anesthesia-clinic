using System;
using System.Web;
using System.Web.UI;

namespace clinik
{
	
	public partial class test : System.Web.UI.Page
	{
		public void test1_click(object sender, EventArgs e)
		{
			mail m = new mail ();
			m.send_by_mail ("masoud.ghrbzh@gmail.com","mono c# test");
		}
		
	}
}

