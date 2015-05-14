<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="doctor_login.aspx.cs" Inherits="clinik.doctor_login" %>
<!DOCTYPE html>
<html lang="fa">

	<head runat="server">
		<title>doctor register</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="doctor register login">

		<link rel="icon" href="../../../view/icons/favicon.ico">

		<link href="../../../view/css/doctor_register_login.css" rel="stylesheet">
		<link href="../../../view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../../view/css/font.css" rel="stylesheet">
		<link href="../../../view/css/shadow.css" rel="stylesheet">
		<link href="../../../view/css/background.css" rel="stylesheet">
	</head>

	<body>
	    <div class="container">
	        <div class="card card-container">
	            <img id="profile-img" class="profile-img-card" src="../../../view/images/avatar.png" />
	            <p id="profile-name" class="profile-name-card"></p>
	            <form class="form-signin" runat="server">
	                <span id="reauth-email" class="reauth-email"></span>
	                <input type="text" name="inp_username" id="inp_username" class="form-control" placeholder="username" required>
	                <input type="password" name="inp_password" id="inp_password" class="form-control" placeholder="Password" required>
	                <div id="remember" class="checkbox">
	                    <label>
	                        <input type="checkbox" value="remember-me"> Remember me
	                    </label>
	                </div>
	                <asp:Button runat="server" id="btn_login_doctor" UseSubmitBehavior="true" CssClass="btn btn-lg btn-primary btn-block btn-signin" Text="Sign in" OnClick="btn_login_doctor_click"></asp:Button>
	            </form>
	            <a href="#" class="forgot-password">
	                forgot the password?
	            </a>
	        </div>
	    </div>

		<script src="../../../view/javascript/jquary/jquery-2.1.3.min.js"></script>
		<script src="../../../view/bootstrap/js/bootstrap.min.js"></script>
		<script src="../../../view/javascript/clinic_api/doctor_register_login.js"></script>
	</body>
</html>