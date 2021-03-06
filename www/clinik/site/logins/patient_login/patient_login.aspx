﻿<%@ Page Language="C#" CodeBehind="patient_login.aspx.cs" Inherits="clinik.patient_login" %>

<!DOCTYPE html>
<html lang="fa">

	<head runat="server">
		<title>مشاهده یا ویرایش فرم پر شده</title>
		<meta name="author" content="m.gh@linuxmail.org">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="clinik">

		<link rel="icon" href="../../../view/icons/favicon.ico">

		<link href="../../../view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../../view/css/font.css" rel="stylesheet">
		<link href="../../../view/css/shadow.css" rel="stylesheet">
		<link href="../../../view/css/background.css" rel="stylesheet">
		<link href="../../../view/css/custom.css" rel="stylesheet">
	</head>

	<body class="background font_nazanin" dir="rtl">
		<div class="container">
			<legend><h2 class="font_nazanin">ورود با کدپیگیری</h2></legend>
			<form class="" id="patient_login_with_trace_code" method="post" runat="server">
				<div class="form-group">
					<label class="h2">کد پیگیری</label>
					<asp:TextBox id="trace_code" CssClass="form-control lightblue_input" placeholder="کد پیگیری را وارد کنید" runat="server"/>
				</div>
				<asp:Button id="btn_trace_code" Text="ورود" CssClass="btn btn-info box-shadow pull-right col-md-6" OnClick="btn_trace_code_clicked" runat="server"></asp:Button>
			</form>
		</div>

		<hr>

		<div class="container">
			<legend><h2 class="font_nazanin">ورود با نام نام خانوادگی شماره مبایل</h2></legend>
			<form class="" id="patient_login_with_name_and_last_name" method="post" action="../../forms/patient/show_edit_patient_form.aspx" runat="server">
				<div class="form-group">
					<label class="h2">نام</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="name" placeholder="نام خود را وارد کنید" runat="server"/>
				</div>
				<div class="form-group">
					<label class="h2">نام خانوادگی</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="last_name" placeholder="نام خانوادگی خود را وارد کنید" runat="server"/>
				</div>
				<div class="form-group">
					<label class="h2">شماره مبایل</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="mobile_number" placeholder="شماره مبایل خود را وارد کنید" runat="server"/>
				</div>
				<asp:Button Text="ورود" UseSubmitBehavior="true" CssClass="btn btn-info box-shadow pull-right col-md-6" runat="server"></asp:Button>
			</form>
		</div>

		<hr>

		<script src="../../../view/javascript/jquary/jquery-2.1.3.min.js"></script>
		<script src="../../../view/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>

