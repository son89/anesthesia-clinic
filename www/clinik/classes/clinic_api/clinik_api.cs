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
		public bool doctor_validation(string username, string password, NpgsqlConnection conn)
		{
			NpgsqlCommand command = new NpgsqlCommand("select username,password from admins where username='" + username + "' and password='" + password + "'", conn);
			try
			{
				NpgsqlDataReader dr = command.ExecuteReader();
				while(dr.Read())
				{
					if((string)dr[0] == username && (string)dr[1] == password)
					{
						return true;
					}
				}
			}
			catch(Exception e)
			{
				string mssage = e.Message;
			}
			return false;
		}
		public string[] doctor_information(string username, string password, NpgsqlConnection conn)
		{
			string[] informations = new string[2];
			NpgsqlCommand command = new NpgsqlCommand("select name,family from admins where username='" + username + "' and password='" + password + "'", conn);
			try
			{
				NpgsqlDataReader dr = command.ExecuteReader();
				while(dr.Read())
				{
					informations[0] = dr[0].ToString();
					informations[1] = dr[1].ToString();
				}
			}
			catch(Exception e)
			{
				string mssage = e.Message;
				informations[0] = "false";
				informations[1] = "false";
			}
			return informations;
		}
	}
}

