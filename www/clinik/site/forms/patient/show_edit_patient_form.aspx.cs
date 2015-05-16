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
			string patient_id = "";
			bool valid_select = true;
			string getdata = "";

			if( Session["id"] != null )
			{
				getdata = "select * from patients_basic_informations where id = " + Session["id"] + ";";
			}
			else if(Request["trace_code"] != null)
			{
				getdata = "select * from patients_basic_informations where trace_code = '" + Request["trace_code"] + "';";
			}

			if( getdata != "" )
			{
				// select_1
				database_npgsql pg = new database_npgsql( "127.0.0.1" , "5432" , "postgres" , "1" , "postgres" );
				pg.create();
				pg.open();
				NpgsqlCommand select_command = new NpgsqlCommand( getdata , pg.get_connection );
				try
				{
					NpgsqlDataReader dr = select_command.ExecuteReader();
					while( dr.Read() )
					{
						patient_id = dr[0].ToString();
						name.Text = dr[1].ToString();
						last_name.Text = dr[2].ToString();
						email.Text = dr[3].ToString();
						mobile_phone_number.Text = dr[4].ToString();
						age.Text = dr[6].ToString();
						weigth.Text = dr[7].ToString();
						height.Text = dr[8].ToString();
						string validation_info = dr[9].ToString();
						sex.SelectedValue = dr[10].ToString();
						personl_id.Text = dr[11].ToString();
					}
				}
				catch(NpgsqlException pge)
				{
					valid_select = false;
				}
				finally
				{
					pg.disconnect();
				}
				// select_2
				getdata = "select * from patients_ppo_from_informations where pat_id = " + patient_id + ";";
				pg.open();
				NpgsqlCommand select_command_2 = new NpgsqlCommand( getdata , pg.get_connection );
				try
				{
					NpgsqlDataReader dr = select_command_2.ExecuteReader();
					while( dr.Read() )
					{
						//name.Text = dr[1].ToString();
						surgeon_name.Text = dr[2].ToString();
						//email.Text = dr[3].ToString();
						//mobile_phone_number.Text = dr[4].ToString();
						//age.Text = dr[6].ToString();
						//weigth.Text = dr[7].ToString();
						//height.Text = dr[8].ToString();
						//string validation_info = dr[9].ToString();
						//sex.SelectedValue = dr[10].ToString();
						//personl_id.Text = dr[11].ToString();
					}
				}
				catch(NpgsqlException pge)
				{
					valid_select = false;
				}
				finally
				{
					pg.disconnect();
				}
			}

			if( valid_select == false )
			{
				ClientScript.RegisterStartupScript(GetType(), "key", "system_error();", true);
				Console.WriteLine("system moshkel peyda karde ast");
			}
			else if( getdata == "" )
			{
				Console.WriteLine("moshekl dar etelat ersali");
			}
			else if(true)
			{
				Console.WriteLine("etelati dar system peyda nashod. mitavanid ba nam va famil va mobile ya ...dobare emthan konid");
			}
		}

		/* // select
		using (System.IO.StreamWriter fi = System.IO.File.AppendText (log_path))
		{
			fi.WriteLine (Session["trace_code"]);
		}
		*/
	}
}

