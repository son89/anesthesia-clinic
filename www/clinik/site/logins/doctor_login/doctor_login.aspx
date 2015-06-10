<%@ Page Language="C#" CodeBehind="doctor_login.aspx.cs" Inherits="clinik.doctor_login" %>
<!DOCTYPE html>

<html lang="fa">

	<head runat="server">
		<title>doctor login</title>
		<meta name="author" content="m.gh@linuxmail.org">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="doctor register login">

		<link href="../../../view/icons/favicon.ico" rel="icon">
		<link href="../../../view/css/doctor_register_login.css" rel="stylesheet">
		<link href="../../../view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../../view/css/font.css" rel="stylesheet">
		<link href="../../../view/css/shadow.css" rel="stylesheet">
		<link href="../../../view/css/custom.css" rel="stylesheet">
	</head>

	<body>
	    <div class="container">
	        <div class="card card-container">
	            <img id="profile-img" class="profile-img-card" src="../../../view/images/avatar.png" />
	            <form id="form_login" class="form-signin form-horizontal" method="post" runat="server">
	                <input type="text" name="username" id="username" class="form-control" placeholder="username" required>
	                <input type="password" name="password" id="password" class="form-control" placeholder="Password" required>
	                <div id="remember" class="checkbox">
	                    <label>
	                        <input type="checkbox" value="remember-me"> Remember me
	                    </label>
	                </div>
	                <asp:Button id="btn_login_doctor" CssClass="btn btn-lg btn-primary btn-block btn-signin" Style="margin-top:10px" Text="Sign in" OnClick="btn_login_doctor_click" runat="server"></asp:Button>
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