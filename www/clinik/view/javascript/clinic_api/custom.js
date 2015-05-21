function wrong_username_or_password()
{
	if( $("#worng_password").length == false)
	{
    	$( "#doctor_form" ).prepend( '<div id="worng_password" class="form-group"><span class="label label-success box-shadow custom_label col-lg-12" >پسورد اشتباه وارد شده است</span></div>' );
	}
}
function test_alert()
{
	 alert("Hello! I am an alert box!!");
}
function save_list_op_selected()
{
	alert( "Handler for save_list_op called." );
}
function save_list_drug_used_selected()
{
	alert( "Handler for save_list_op called." );
}
function save_heart_problem_list_selected()
{
	alert( "Handler for save_list_op called." );
}
function breath-problem-list-choosed_selected()
{
	alert( "Handler for save_list_op called." );
}
