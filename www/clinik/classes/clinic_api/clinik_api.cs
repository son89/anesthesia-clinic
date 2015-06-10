using System;
using System.Data;
using Npgsql;

namespace clinik
{
	public class clinik_api
	{
		public clinik_api ()
		{
		}
		public string get_id_with_trace_code(string trace_code)
		{
			return true.ToString(); 
		}
		public string[] get_patients_ppo_form_informations_with_paient_id(string patient_id)
		{
			string[] informations = new string[12];
			string query = "select * from patients_ppo_from_informations where pat_id = " + patient_id + ";";
			database_npgsql pg = new database_npgsql( "127.0.0.1" , "5432" , "postgres" , "1" , "postgres" );
			pg.create();
			pg.open();
			NpgsqlCommand select_command = new NpgsqlCommand( query , pg.get_connection );
			try
			{
				NpgsqlDataReader dr = select_command.ExecuteReader();
				while( dr.Read() )
				{
					informations[0] = dr[0].ToString();
					informations[1] = dr[1].ToString();
					informations[2] = dr[2].ToString();
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
				string m = pge.Message;
				informations[0] = "False";
			}
			finally
			{
				pg.disconnect();
			}
			return informations;
		}
		public string[] get_patients_basic_informations_with_id(string id)
		{
			string[] informations = new string[12];
			string query = "select * from patients_basic_informations where id = " + id + ";";
			database_npgsql pg = new database_npgsql( "127.0.0.1" , "5432" , "postgres" , "1" , "postgres" );
			pg.create();
			pg.open();
			NpgsqlCommand select_command = new NpgsqlCommand( query , pg.get_connection );
			try
			{
				NpgsqlDataReader dr = select_command.ExecuteReader();
				while( dr.Read() )
				{
					informations[0] = dr[0].ToString();
					informations[1] = dr[1].ToString();
					informations[2] = dr[2].ToString();
					informations[3] = dr[3].ToString();
					informations[4] = dr[4].ToString();
					informations[5] = dr[5].ToString();
					informations[6] = dr[6].ToString();
					informations[7] = dr[7].ToString();
					informations[8] = dr[8].ToString();
					informations[9] = dr[9].ToString();
					informations[10] = dr[10].ToString();
					informations[11] = dr[11].ToString();
				}
			}
			catch(NpgsqlException pge)
			{
				string m = pge.Message;
				informations[0] = "False";
			}
			finally
			{
				pg.disconnect();
			}
			return informations;
		}
		public string[] doctor_information_with_username_password(string username, string password)
		{
			string[] informatinos = new string[10];
			database_npgsql pg = new database_npgsql( "127.0.0.1" , "5432" , "postgres" , "1" , "postgres" );
			pg.create();
			pg.open();
			NpgsqlCommand command = new NpgsqlCommand("select * from admins where username='" + username + "' and password='" + password + "'", pg.get_connection);
			try
			{
				NpgsqlDataReader dr = command.ExecuteReader();
				while(dr.Read())
				{
					informatinos[0] = dr[0].ToString();
					informatinos[1] = dr[1].ToString();
					informatinos[2] = dr[2].ToString();
					informatinos[3] = dr[3].ToString();
					informatinos[4] = dr[4].ToString();
					informatinos[5] = dr[5].ToString();
					informatinos[6] = dr[6].ToString();
				}
			}
			catch(Exception e)
			{
				string mssage = e.Message;
			}
			finally
			{
				pg.disconnect();
			}
			return informatinos;
		}
		public string[] doctor_information_with_doctor_id(string id)
		{
			string[] informatinos = new string[10];
			database_npgsql pg = new database_npgsql( "127.0.0.1" , "5432" , "postgres" , "1" , "postgres" );
			pg.create();
			pg.open();
			NpgsqlCommand command = new NpgsqlCommand("select * from admins where id=" + id + ";", pg.get_connection);
			try
			{
				NpgsqlDataReader dr = command.ExecuteReader();
				while(dr.Read())
				{
					informatinos[0] = dr[0].ToString();
					informatinos[1] = dr[1].ToString();
					informatinos[2] = dr[2].ToString();
					informatinos[3] = dr[3].ToString();
					informatinos[4] = dr[4].ToString();
					informatinos[5] = dr[5].ToString();
					informatinos[6] = dr[6].ToString();
				}
			}
			catch(Exception e)
			{
				string mssage = e.Message;
			}
			finally
			{
				pg.disconnect();
			}
			return informatinos;
		}
	}
}

