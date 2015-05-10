using System;
using System.Data;
using Npgsql;
using System.Web.UI.WebControls.WebParts;

namespace clinik
{
	public class database_npgsql
	{
		string server_address;
		string port;
		string user_id;
		string password;
		string database_name;

		NpgsqlConnection conn;

		public NpgsqlConnection get_connection
		{
			get { return conn; }
		}
		public database_npgsql(string server_address, string port, string user_id, string password, string database_name)
		{
			this.server_address = server_address;
			this.port = port;
			this.user_id = user_id;
			this.password = password;
			this.database_name = database_name;
		}

		public void create()
		{
			string connection = "Server=" + this.server_address + ";Port=" + this.port + ";User Id=" + this.user_id + ";Password=" + this.password + ";Database=" + this.database_name + ";";
			conn = new NpgsqlConnection(connection);
		}
		public void open()
		{
			conn.Open();
		}
		public void disconnect()
		{
			conn.ClearPool();
			conn.Close();
		}

		public string get_version()
		{
			NpgsqlCommand command = new NpgsqlCommand("select version()", conn);
			String serverversion;
			serverversion = (String)command.ExecuteScalar();
			return serverversion;
		}

		~database_npgsql ()
		{
			conn.Close();
		}
	}
}

