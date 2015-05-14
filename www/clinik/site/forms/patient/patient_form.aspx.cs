using System;
using System.Data;
using System.Web;
using System.Web.UI;
using Npgsql;

namespace clinik
{
	
	public partial class patient_form : System.Web.UI.Page
	{
		public void btn_send_clicked( object sender, EventArgs e )
		{
			Random r = new Random (DateTime.Now.Millisecond);
			string trace_code_rand_string = r.Next (0, 100000).ToString () + r.Next (0, 100000).ToString ();

			database_npgsql pg = new database_npgsql ("127.0.0.1", "5432", "postgres", "1", "postgres");
			pg.create ();

			bool valid_insert = true;
			object patient_id = -1;

			// insert_1
			pg.open ();
			string temp_1 = "insert into patients_basic_informations values(default, '"
			                + name.Text
			                + "', '" + last_name.Text
			                + "', '" + email.Text
			                + "', '" + mobile_phone_number.Text
			                + "', '" + trace_code_rand_string
			                + "', '" + age.Text
			                + "', '" + weigth.Text + "', '" + height.Text
			                + "', true, '" + sex.SelectedValue
			                + "', '" + personl_id.Text + "') returning id;";
			NpgsqlCommand ins_command_1 = new NpgsqlCommand (temp_1, pg.get_connection);
			try
			{
				patient_id = ins_command_1.ExecuteScalar ();
			}
			catch (NpgsqlException pge)
			{
				valid_insert = false;
			}
			finally
			{
				pg.disconnect ();
			}

			// insert_2
			pg.open ();
			string temp_2 = "insert into patients_ppo_from_informations values(" + patient_id.ToString ()
			                + "," + operation.SelectedValue
							+ ",'" + surgeon_name.SelectedValue 
							+ "','" + suggestion_operation_time_day.Text + "/" + suggestion_operation_time_month.Text + "/" + suggestion_operation_time_year.Text 
							+ "'," + steroid_corti.Checked 
							+");";
			NpgsqlCommand ins_command_2 = new NpgsqlCommand (temp_2, pg.get_connection);
			try
			{
				ins_command_2.ExecuteNonQuery ();
			}
			catch (NpgsqlException pge)
			{
				valid_insert = false;
			}
			finally
			{
				pg.disconnect ();
			}

			// check random_trace_code with database_trace_code
			string get_trace_code = "select trace_code from patients_basic_informations where id = " + patient_id + ";";
			string trace_code_from_database = "";
			pg.open ();
			NpgsqlCommand select_command = new NpgsqlCommand (get_trace_code, pg.get_connection);
			try
			{
				NpgsqlDataReader dr = select_command.ExecuteReader ();
				while (dr.Read ())
				{
					for (int i = 0; i < dr.FieldCount; i++)
					{
						trace_code_from_database = dr [i].ToString ();
					}
				}
			}
			finally
			{
				pg.disconnect ();
			}
			if (trace_code_rand_string != trace_code_from_database)
			{
				valid_insert = false;
			}

			if (valid_insert == true)
			{
				Console.WriteLine ("اطلاعات شما ثبت شد و  شماره پیگیری شما ۰۹۰۹۰۹۰۹ است.اطلاعات به نشانی ایمیل و شماره مبایلتان ارسال میشود. با کلیک در ادامه لطفا اطلاعات ورودی خود را تایید کنید ");
				Session ["id"] = patient_id.ToString ();
				Response.Redirect ("show_edit_patient_form.aspx");
			}
			else if (valid_insert == false)
			{
				Console.WriteLine ("سرور به مشکل برخورد کرده است و بزودی حل میشود. لطفا اطلاعات را دستی پر کنید.همجنین میتوناید از اطلاعات پرینت گرفته و به دکتر مربوطه ارایه دهید.");
				// sms & email to admins
			}
			//Request.Form["username"], Request.Form["password"]
		}
	}
}

