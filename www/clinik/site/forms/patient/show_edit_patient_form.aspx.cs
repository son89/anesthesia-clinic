using System;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	public partial class show_edit_patient_form : System.Web.UI.Page
	{
		protected void Page_Load( object sender , EventArgs e )
		{
			if( Session["id"] != null )
			{
				clinik_api p_i;
				string patient_id = "";

				p_i = new clinik_api();
			
				// get basic information
				string [] information = p_i.get_patients_basic_informations_with_id (Session["id"].ToString());
				patient_id = information[0];
				name.Text = information[1];
				last_name.Text = information[2];
				email.Text = information[3];
				mobile_phone_number.Text = information[4];
				age.Text = information[6];
				weigth.Text = information[7];
				height.Text = information[8];
				string validation_info = information[9];
				sex.SelectedValue = information[10];
				personl_id.Text = information[11];
				// get patient ppo form informations
				information = p_i.get_patients_ppo_form_informations_with_paient_id(patient_id);
				surgeon_name.Text = information[2];
			}
			else
			{
				Response.Redirect( "../../logins/patient_login/patient_login.aspx" );
			}
		}
	}
}

