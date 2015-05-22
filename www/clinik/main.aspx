<%@ Page Language="C#" CodeBehind="main.aspx.cs" Inherits="clinik.main" %>

<!DOCTYPE html>
<html lang="fa">

	<head runat="server">
		<title>کلینیک بیهوشی</title>
		<meta name="author" content="m.gh@linuxmail.org">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="clinik">

		<link href="view/icons/favicon.ico" rel="icon">
		<link href="view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="view/css/carousel.css" rel="stylesheet">
		<link href="view/css/font.css" rel="stylesheet">
		<link href="view/css/shadow.css" rel="stylesheet">
		<link href="view/css/background.css" rel="stylesheet">
		<link href="view/css/custom.css" rel="stylesheet">
	</head>

		<body class="background">
		<!-- menu_bar -->
		<div class="navbar-wrapper font_nazanin">
			<div class="container">
				<nav class="navbar navbar-inverse navbar-static-top">
					<div class="container">
						<div class="navbar-header pull-right">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							</button>
		<!--- seprator-->	<a class="navbar-brand" href=""></a>
							<a class="navbar-brand" href="" style="font-size:20px">کلینیک بیهوشی</a>
						</div>
						<div id="navbar" class="navbar-collapse collapse">
							<ul class="nav navbar-nav pull-right">
								<li class="active pull-right">
									<a href="site/logins/doctor_login/doctor_login.aspx" style="font-size:20px">پنل متخصصین</a>
								</li>
								<li><a href="#about">About</a></li>
								<li><a href="#contact">Contact</a></li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li class="dropdown-header">Nav header</li>
										<li><a href="#">Separated link</a></li>
										<li><a href="#">One more separated link</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
		<!-- end_menu_bar -->

		<!-- slide_show -->
		<div id="sample" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#sample" data-slide-to="0" class="active"></li>
				<li data-target="#sample" data-slide-to="1"></li>
				<li data-target="#sample" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<img src="view/images/50x50.gif" alt="">
					<div class="container">
						<div class="carousel-caption">
							<h1>Example headline.</h1>
							<p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
							<p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="container">
						<div class="carousel-caption">
							<h1>Another example headline.</h1>
							<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
							<p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="container">
						<div class="carousel-caption">
							<h1>One more for good measure.</h1>
							<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
							<p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
						</div>
					</div>
				</div>
			</div>
			<!-- Left and right controls -->
			<a class="left carousel-control" href="#sample" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#sample" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
		<!-- end_slide_show -->
	
		<!--page-->
		<div class="container font_quran_taha" dir="rtl">
			<div class="row" style="margin-bottom: 5%;">
				<!-- doctor-->
				<div class="col-lg-6 text-center">
					<img class="img-rounded" src="view/images/doctor-drawing.png" width="115" height="140">
					<h2 class="text-good">ورود متخصص</h2>
					<p>پنل متخصصین</p>
					<form id="doctor_form" runat="server" class="form-horizontal col-lg-offset-3 col-lg-6 col-lg-offset-3" method="post" action="" dir="ltr">
						<div class="form-group">
							<input name="username" type="text" class="lightblue_input form-control" id="username" placeholder="username">
						</div>
						<div class="form-group">
							<input name="password" type="password" class="lightblue_input form-control" id="password" placeholder="Password">
						</div>
						<div class="form-group pull-left" style="font-weight: bold">
							<input type="checkbox"> Remmember me
						</div>
						<div class="form-group">
							<asp:Button runat="server" id="btn_login_doctor" UseSubmitBehavior="true" CssClass="btn btn-info pull-right box-shadow" Text="log in" Style="width:100px" OnClick="btn_login_doctor_click"/>
						</div>
					</form>
				</div>

				<!-- patient -->
				<div class="col-lg-6 text-center">
					<img class="img-rounded" src="view/images/patient.png" alt="Generic placeholder image" width="140" height="140">
					<h2 class="text-good">فرم بیمار</h2>
					<p>لطفا فرم را پر کنید</p>
					<form id="patient_form" class="form-horizontal col-lg-offset-3 col-lg-6 col-lg-offset-3" runat="server" method="post" action="">
						<div class="form-group">
							<asp:Button Text="ثبت فرم" id="register_patient_form" OnClick="register_patient_form_clicked" CssClass="btn btn-info box-shadow" Style="width:210px;font-size:17px;" runat="server"></asp:Button>
						</div>
						<div class="form-group">
							<asp:Button Text="مشاهده یا ویرایش فرم ثبت شده" id="btn_show_edit_patient_form" OnClick="btn_show_edit_patient_form_clicked" CssClass="btn btn-info box-shadow" Style="width:210px;font-size:17px;" runat="server"></asp:Button>
						</div>
					</form>
				</div>

			</div>
		</div>

		<span style="margin-bottom: 10%"></span>
		<footer class="panel-footer" dir="ltr">
			<p>&copy; 2015, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
		</footer>

		<script src="view/javascript/jquary/jquery-2.1.3.min.js"></script>
		<script src="view/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>
