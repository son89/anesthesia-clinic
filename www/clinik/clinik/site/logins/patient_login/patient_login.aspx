<%@ Page Language="C#" CodeBehind="patient_login.aspx.cs" Inherits="clinik.patient_login" %>

<!DOCTYPE html>
<html lang="fa">

	<head runat="server">
		<title>مشاهده یا ویرایش فرم پر شده</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="clinik">

		<link rel="icon" href="../../../view/icons/favicon.ico">

		<link href="../../../view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../../view/css/carousel.css" rel="stylesheet">
		<link href="../../../view/css/font.css" rel="stylesheet">
		<link href="../../../view/css/shadow.css" rel="stylesheet">
		<link href="../../../view/css/background.css" rel="stylesheet">
		<link href="../../../view/css/costom.css" rel="stylesheet">
	</head>

	<body class="background font_nazanin" dir="rtl">
		<div class="container">
			<form class="" id="patient_login_with_trace_code" runat="server">
				<div class="form-group">
					<label class="h2">کد پیگیری</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="trace_code" placeholder="کد پیگیری را وارد کنید" runat="server"/>
				</div>
				<asp:Button Text="ورود" UseSubmitBehavior="true" CssClass="btn btn-info box-shadow pull-right col-md-6" runat="server"></asp:Button>
			</form>
		</div>

		<div class="container">
			<form class="" id="patient_login_with_name_and_last_name" runat="server">
				<div class="form-group">
					<label class="h2">نام</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="name" placeholder="نام خود را وارد کنید" runat="server"/>
				</div>
				<div class="form-group">
					<label class="h2">نام خانوادگی</label>
					<asp:TextBox CssClass="form-control lightblue_input" id="last_name" placeholder="نام خانوادگی خود را وارد کنید" runat="server"/>
				</div>
				<asp:Button Text="ورود" UseSubmitBehavior="true" CssClass="btn btn-info box-shadow pull-right col-md-6" runat="server"></asp:Button>
			</form>
		</div>

		<script src="../../../view/javascript/jquary/jquery-2.1.3.min.js"></script>
		<script src="../../../view/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>

