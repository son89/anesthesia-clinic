<%@ page language="C#" autoeventwireup="true" codebehind="patient_form.aspx.cs" inherits="clinik.patient_form" %>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
	<head runat="server">
		<title>پرسشنامه قبل از عمل</title>
		<meta charset="utf-8">
		<meta name="author" content="m.gh@linuxmail.org">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="patient_form">

		<link rel="icon" href="../../../view/icons/favicon.ico">
		<link href="../../../view/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="../../../view/css/font.css" rel="stylesheet">
		<link href="../../../view/css/shadow.css" rel="stylesheet">
		<link href="../../../view/css/background.css" rel="stylesheet">
		<link href="../../../view/css/costom.css" rel="stylesheet">

		<script src="../../../view/javascript/jquary/jquery-2.1.3.min.js"></script>
		<script src="../../../view/bootstrap/js/bootstrap.min.js"></script>
	</head>
	<body class="background">
		<div class="container">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header pull-right">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand font_nazanin" href="#">فرم پرسشنامه قبل از عمل</a>
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li class="active">
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown<span class="caret"></span></a>
								<ul class="dropdown-menu" role="menu">
									<li>
										<a href="#">Action</a>
									</li>
									<li>
										<a href="#">Another action</a>
									</li>
									<li>
										<a href="#">Something else here</a>
									</li>
									<li class="divider"></li>
									<li class="dropdown-header">Nav header</li>
									<li>
										<a href="#">Separated link</a>
									</li>
									<li>
										<a href="#">One more separated link</a>
									</li>
								</ul>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="active">
								<a href="./">Default<span class="sr-only">(current)</span></a>
							</li>
							<li>
								<a href="../navbar-static-top/">Static top</a>
							</li>
							<li>
								<a href="../navbar-fixed-top/">Fixed top</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

		<div class="container">
			<form id="patient_form_ppo" class="form-horizontal font_nazanin h3" method="post" action="" runat="server">
				<legend><h2 class="font_nazanin">مشخصات شناسنامه ای</h2></legend>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">نام</label>
					<span class="col-md-4 pull-right">
						<asp:TextBox id="name" placeholder="نام بیمار" CssClass="form-control lightblue_input" runat="server"/>
					</span>
				</div>
	
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">نام خانوادگی</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="last_name" placeholder="نام خانوادگی بیمار" CssClass="form-control lightblue_input" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">کدملی</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="personl_id" CssClass="form-control lightblue_input" placeholder="کد ملی" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">جنسیت</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="sex" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="زن" Value="f"></asp:ListItem>
							<asp:ListItem Text="مرد" Value="m"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">سن</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="age" type="number" CssClass="form-control lightblue_input"  placeholder="سن بیمار" runat="server"/>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">قد</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="height" CssClass="form-control lightblue_input" placeholder="قد بیمار" runat="server"/>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">وزن بیمار</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="weigth" CssClass="form-control lightblue_input" placeholder="وزن بیمار" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">شماره مبایل</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="mobile_phone_number" CssClass="form-control lightblue_input" placeholder="شماره مبایل" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">ایمیل</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="email" CssClass="form-control lightblue_input" placeholder="ایمیل" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">نوع عمل جراحی</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="cat_op_list" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی"></asp:ListItem>
							<asp:ListItem Text="قلب"></asp:ListItem>
							<asp:ListItem Text="بایپس عروقی"></asp:ListItem>
							<asp:ListItem Text="همه"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">عمل جراحی</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="operation_kind" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی" Value="null"></asp:ListItem>
							<asp:ListItem Text="قلبی 1" Value="heart_1"></asp:ListItem>
							<asp:ListItem Text="قلبی 2"></asp:ListItem>
							<asp:ListItem Text="عروقی 1"></asp:ListItem>
							<asp:ListItem Text="عروقی 2"></asp:ListItem>
							<asp:ListItem Text="بیشتر"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right" style="font-size:18px">لیست همه ی عمل های جراحی</label>
					<div class="col-md-4 pull-right">
						<button name="full_op_list" type="button" class="btn btn-info" data-toggle="modal" data-target="#op-list-popup">لیست کامل عمل های جراحی
						</button>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right">نام جراح</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="surgeon_name" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی"></asp:ListItem>
							<asp:ListItem Text="متخصص قلب 1"></asp:ListItem>
							<asp:ListItem Text="متخصص قلب 2"></asp:ListItem>
							<asp:ListItem Text="متخصص عروقی 1"></asp:ListItem>
							<asp:ListItem Text="متخصص عروقی 2"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right" style="font-size:18px">تاریخ پیشنهادی عمل جراحی</label>
					<div class="col-md-1 pull-right">
						<asp:TextBox id="suggestion_operation_time_year" CssClass="form-control lightblue_input" placeholder="سال" runat="server"/>
					</div>
					<div class="col-md-1 pull-right">
						<asp:TextBox id="suggestion_operation_time_month" CssClass="form-control lightblue_input" placeholder="ماه" runat="server"/>
					</div>
					<div class="col-md-1 pull-right">
						<asp:TextBox id="suggestion_operation_time_day" CssClass="form-control lightblue_input" placeholder="روز" runat="server"/>
					</div>
				</div>

				<!-------------------------------------------------------------------------------->
				<legend><h2 class="font_nazanin">لیست اعمال جراحی که تاکنون داشته اید</h2></legend>
				<!-------------------------------------------------------------------------------->

				<div id="op-kind-patient-div" class="form-group">
					<label for="last_operation_kind" class="col-md-2 control-label pull-right">نوع عمل جراحی</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="op_kind_patient" class="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی"></asp:ListItem>
							<asp:ListItem Text="قلبی 1"></asp:ListItem>
							<asp:ListItem Text="قلبی 2"></asp:ListItem>
							<asp:ListItem Text="عروقی 1"></asp:ListItem>
							<asp:ListItem Text="بیشتر"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>
		
				<div id="last_op_date_patient" class="form-group">
					<label class="col-md-2 control-label pull-right">تاریخ عمل جراحی</label>
					<div class="col-md-1 pull-right">
						<asp:TextBox CssClass="form-control lightblue_input" id="op_date_patient_year" placeholder="سال" runat="server"/>
					</div>
					<div class="col-md-1 pull-right">
						<asp:TextBox CssClass="form-control lightblue_input" id="op_date_patient_month" placeholder="ماه" runat="server"/>
					</div>
					<div class="col-md-1 pull-right">
						<asp:TextBox CssClass="form-control lightblue_input" id="op_date_patient_day" placeholder="روز" runat="server"/>
					</div>
				</div>
		
				<div class="form-group">
					<label for="op-problem" class="col-md-2 control-label pull-right">مشکلات احتمالی حین عمل</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="problem_during_op" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی"></asp:ListItem>
							<asp:ListItem Text="دیر بیدار شدن"></asp:ListItem>
							<asp:ListItem Text="تهوع بعد عمل جراحی"></asp:ListItem>
							<asp:ListItem Text="سایر"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>
		
				<div class="form-group">
					<label class="col-md-2 control-label pull-right"></label>
					<div class="col-md-4 pull-right">
						<asp:Button Text="انتخاب" id="save_list_op" CssClass="col-md-12 btn btn-primary pull-right" runat="server"></asp:Button>
					</div>
				</div>
		
				<div class="form-group">
					<div class="col-md-12">
						<table class="table table-striped" id="table_op">
							<tr>
								<td>
									<h4>نوع عمل جراحی</h4>
								</td>
								<td>
									<h4>تاریخ عمل جراح</h4>
								</td>
								<td>
									<h4>مشکلات احتمالی حین عمل</h4>
								</td>
								<td>
									<h4>ویرایش</h4>
								</td>
							</tr>
						</table>
					</div>
				</div>

				<legend><h2 class="font_nazanin">نام هر دارویی را که طی یکماه اخیر استفاده کردید</h2></legend>
					
				<div id="drugs_list_div" class="form-group">
					<label for="drugs_list" class="col-md-2 control-label pull-right">لیست داروها</label>
					<div class="col-md-4 pull-right">
						<asp:DropDownList id="drugs_list" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="خالی"></asp:ListItem>
							<asp:ListItem Text="داروی 1"></asp:ListItem>
							<asp:ListItem Text="داروی 2"></asp:ListItem>
							<asp:ListItem Text="داروی 3"></asp:ListItem>
							<asp:ListItem Text="بیشتر"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right">نحوه ی استفاده</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="drugs_explain" CssClass="form-control lightblue_input" placeholder="توضیحات بیشتر" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-2 control-label pull-right"></label>
					<div class="col-md-4 pull-right">
						<asp:Button Text="انتخاب" id="save_list_drug_used" CssClass="col-md-12 btn btn-primary pull-right" runat="server"></asp:Button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-12">
						<table class="table table-striped" id="table_drugs">
							<tr id="drugs-first-row">
								<td>
									<h4>داروی انتخاب شده</h4>
								</td>
								<td>
									<h4>نحوه ی استفاده</h4>
								</td>
								<td>
									<h4>ویرایش</h4>
								</td>
							</tr>
						</table>
					</div>
				</div>

				<legend><h2 class="font_nazanin">سوالات قبل از عمل لطفا به همه سوالات صحیح پاسخ دهید</h2></legend>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا استروئید (کورتیزون، متیل پردنیزلون و دگزامتازون) در سال گذشته استفاده کردید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="steroid_corti" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا تا بحال سیگار کشیده اید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="smoker_addiction" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label pull-right">تعداد نخ مصرفی در روز</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="cigar_many" CssClass="form-control lightblue_input" placeholder="تعداد نخ مصرفی در روز" runat="server"></asp:TextBox>
					</div>
				</div>


				<div class="form-group">
					<label class="col-md-3 control-label pull-right">چند سال سیگار مصرف کردید؟</label>
					<div class="col-md-4 pull-right">
						<asp:TextBox id="year_use_smoke" CssClass="form-control lightblue_input" placeholder="سال" runat="server"></asp:TextBox>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا در حال حاضر سیگار می کشید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="smoker_now" CssClass="form-control lightblue_input" runat="server"/>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-7 control-label pull-right">تا بحال الکل مصرف کرده اید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="alchol_use" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا در حال حاضر یا تا بحال مواد روان گردان(قرص اکس، ...) مصرف کرده اید؟ (این موضوع برای سلامت شماست)</label>
					<div class="col-md-1">
						<asp:CheckBox id="drug_use" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">می توانید یک طبقه پله را بدون توقف بالا بروید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="stair_up" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا تابحال مشکل قلبی داشته اید؟</label>
					<div class="col-md-1">
						<asp:CheckBox id="heart_problem" CssClass="form-control lightblue_input" runat="server"></asp:CheckBox>
					</div>
				</div>
			
				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<asp:DropDownList id="heart_problem_list" CssClass="form-control lightblue_input" runat="server">
							<asp:ListItem Text="درد سینه"></asp:ListItem>
							<asp:ListItem Text="فشار بر قفسه"></asp:ListItem>
							<asp:ListItem Text="حمله قلبی"></asp:ListItem>
							<asp:ListItem Text="نوار قلب غیرطبیعی"></asp:ListItem>
							<asp:ListItem Text="ضربان قلب نامنظم"></asp:ListItem>
							<asp:ListItem Text="صدای اضافه قلب"></asp:ListItem>
							<asp:ListItem Text="تپش قلب"></asp:ListItem>
							<asp:ListItem Text="نارسایی قلب"></asp:ListItem>
							<asp:ListItem Text="آب آوردن قلب"></asp:ListItem>
							<asp:ListItem Text="آب آوردن ریه"></asp:ListItem>
							<asp:ListItem Text="به شما توصیه شده است که قبل از دندانپزشکی آنتی بیوتیک مصرف کنی"></asp:ListItem>
						</asp:DropDownList>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<asp:Button Text="انتخاب" id="save_heart_problem_list" CssClass="col-md-12 btn btn-primary pull-right" runat="server"></asp:Button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea id="save-heart-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا سابقه ای از فشار خون بالا داشته اید یا مبتلا به بیماری فشار خون هستید؟</label>
					<div class="col-md-1">
						<input name="blood_presure" type="checkbox" class="form-control lightblue_input" id="blood-presure">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا سابقه ای از قند بالای خون داشته اید یا مبتلا به بیماری قند خون (دیابت) هستید؟</label>
					<div class="col-md-1">
						<input id="diabetes" type="checkbox" class="form-control lightblue_input" id="diabeti">
					</div>
				</div>
	
				<div class="form-group">
					<label class="col-md-9 control-label pull-right">آیا دچار مشکلات ریوی شده اید؟</label>
					<div class="col-md-1">
						<input id="lung_problem" type="checkbox" class="form-control lightblue_input" id="breath-problem">
					</div>
				</div>
		
				<div id="breath_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="breath-problem-list" class="form-control lightblue_input">
							<option>تنگی نفس</option>
							<option>آمفیزم</option>
							<option>برونشیت</option>
							<option>آسم</option>
							<option>سل</option>
							<option>عکس قفسه سینه مشکل دارد</option>
							<option>سابقه حساسیت تنفسی</option>
							<option>سابقه استفاده از اسپری تنفسی</option>
						</select>
						<span id="breath-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list3" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="lung_problem_list" id="save-breath-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">در حال حاضر یا به تازگی مریضی داشته اید که با سرماخودگی، تب، لرز، آنفولانزا یا سرفه خلط دار همراه بوده است؟</label>
					<div class="col-md-1">
						<input name="cold_etc_checkbox" type="checkbox" class="form-control lightblue_input" id="sickness">
						<input id="sickness-hide" name="cold_etc_checkbox" type="hidden" value="false">
					</div>
				</div>
	

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<input name="cold_etc" id="sickness-explain" type="text" class="form-control lightblue_input">
					</div>
				</div>
		
				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">خودتان یا کسی از خانوادیتان تا بحال مشکل خونریزی شدیدی داشته اند؟</label>
					<div class="col-md-1">
						<input name="bleeding_problem" type="checkbox" class="form-control lightblue_input" id="bleeding-problem">
						<input id="bleeding-problem-hide" name="bleeding_problem" type="hidden" value="false">
					</div>
				</div>

				<div id="bleeding_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="bleeding-problem-list" class="form-control lightblue_input">
							<option>خونریزی زیاد از دماغ</option>
							<option>لثه</option>
							<option>موقع دندان کشیدن</option>
							<option>موقع عمل جراحی</option>
						</select>
						<span id="bleeding-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list4" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="bleeding_problem_list" id="save-bleeding-problem" class="form-control lightblue_input"  rows="3" readonly="readonly"></textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">هیچ مشکل خونی داشته اید؟</label>
					<div class="col-md-1">
						<input name="blood_problem" type="checkbox" class="form-control lightblue_input" id="blood-problem">
						<input id="blood-problem-hide" name="blood_problem" type="hidden" value="false">
					</div>
				</div>
			
				<div id="blood_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="blood-problem-list" class="form-control lightblue_input">
							<option>کم خونی</option>
							<option>سرطان خون</option>
							<option>کم خونی داسی شکل</option>
							<option>لخته شدن سریع خون</option>
							<option>غلظت خون</option>
							<option>دریافت خون</option>
						</select>
						<span id="blood-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list5" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="blood_problem_list" id="save-blood-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تا به حال مشکلات کلیوی داشته اید؟</label>
					<div class="col-md-1">
						<input name="kidney_problem" type="checkbox" class="form-control lightblue_input" id="kidney-problem">
						<input id="kidney-problem-hide" name="kidney_problem" type="hidden" value="false">
					</div>
				</div>

				<div id="kidney_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="kidney-problem-list" class="form-control lightblue_input">
							<option>سنگ</option>
							<option>دیالیز</option>
							<option>نارسایی کلیه</option>
						</select>
						<span id="kidney-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list6" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="kidney_problem_list" id="save-kidney-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تا به حال مشکلاتی کبدی داشته اید؟</label>
					<div class="col-md-1">
						<input name="liver_problem" type="checkbox" class="form-control lightblue_input" id="liver-problem">
						<input id="liver-problem-hide" name="liver_problem" type="hidden" value="false">
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="liver-problem-list" class="form-control lightblue_input">
							<option>سیروز</option>
							<option>هپاتیت</option>
							<option>زردی</option>
						</select>
						<span id="liver-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list7" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="liver_problem_list" id="save-liver-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تا بحال مشکلات سیستم گوارشی داشته اید؟</label>
					<div class="col-md-1">
						<input name="digestion_problem" type="checkbox" class="form-control lightblue_input" id="digestion-problem">
						<input id="digestion-problem-hide" name="digestion_problem" type="hidden" value="false">
					</div>
				</div>

				<div id="digestion_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="digestion-problem-list" class="form-control lightblue_input">
							<option>سوزش سردل مکرر</option>
							<option>فتخ شکمی</option>
							<option>زخم معده یا روده</option>
						</select>
						<span id="digestion-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list8" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="digestion_problem_list" id="save-digestion-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تا به حال مشکلات زیر را داشته اید؟</label>
					<div class="col-md-1">
						<input name="general_problem" type="checkbox" class="form-control lightblue_input" id="general-problem">
						<input id="general-problem-hide" name="general_problem" type="hidden" value="false">
					</div>
				</div>

				<div id="general_problem_div" class="form-group">
					<div class="col-md-8 control-label pull-right">
						<select id="general-problem-list" class="form-control lightblue_input">
							<option>کمردرد فعلی</option>
							<option>سابقه کمردردمکرر</option>
							<option>درد گردن/فک</option>
							<option>آرتریت</option>
							<option>روماتوئید(روماتیسم)</option>
							<option>آرتروز</option>
							<option>مشکل مفصل فک</option>
							<option>پوکی استخوان</option>
							<option>غده تیروئید (کم کاری تیروئید)</option>
							<option>پرکاری تیروئید</option>
							<option>گواتر</option>
							<option>بزرگی غده تیروئید</option>
							<option>صرع</option>
							<option>تشنج</option>
							<option>سکته مغزی</option>
							<option>ضعف صورت یا دست یا پا</option>
							<option>سختی در صحبت کردن</option>
							<option>لکنت زبان</option>
							<option>درد کرامپی در پیاده روی</option>
							<option>مشکل شنوایی</option>
							<option>مشکل حافظه</option>
							<option>تاری دید</option>
							<option>آب مروارید</option>
							<option>آب سیاه</option>
							<option>آبریزش یا قرمزی چشم در حال حاضر</option>
						</select>
						<span id="general-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list9" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="general_problem_list" id="save-general-problem" class="form-control lightblue_input"  rows="4" readonly="readonly"></textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تابحال بخاطر سرطان تحت کموتراپی با رادیوتراپی قرار گرفته اید؟</label>
					<div class="col-md-1">
						<input name="radiotrapi_chemotherapy" id="cancer" type="checkbox" class="form-control lightblue_input">
						<input id="cancer-hide" name="radiotrapi_chemotherapy" type="hidden" value="false">
					</div>
				</div>
				
				<div class="form-group h4" id="woman-option">
					<label class="col-md-4 control-label pull-right">19- آیا باردار هستید؟</label>
					<div class="col-md-1">
						<input name="pregnency" id="pregnant" type="checkbox" class="form-control lightblue_input">
						<input id="pregnant-hide" name="pregnency" type="hidden" value="false">
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-4 control-label pull-right">آخرین قاعدگی تان چه زمانی بوده است؟</label>
					<div class="col-md-5 pull-right">
						<input name="last_menstruation" type="text" class="form-control lightblue_input"  placeholder="سال/ماه/روز">
					</div>
				</div>
		
				<div class="form-group h4" id="child-check">
					<label class="col-md-9 control-label pull-right">درهنگام زایمان یا بیماری مادرزادی داشته است؟</label>
					<div class="col-md-1">
						<input name="pregency_issue" id="pregnant-problem" type="checkbox" class="form-control lightblue_input">
						<input id="pregnant-problem-hide" name="pregency_issue" type="hidden" value="false">
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا تابحال طی جراحی یا بیهوشی مشکل داشته اید</label>
					<div class="col-md-1">
						<input name="anesthesia_problem" type="checkbox" class="form-control lightblue_input" id="anesthesia-problem">
						<input id="anesthesia-problem-hide" name="anesthesia_problem" type="hidden" value="false">
					</div>
				</div>

				<div class="form-group" id="anesthesia_problem_div">
					<div class="col-md-8 control-label pull-right">
						<select id="anesthesia-problem-list" class="form-control lightblue_input">
							<option>تهوع</option>
							<option>استفراغ شدید بعدجراحی</option>
							<option>هیپرترمی بدخیم (خود/همخونیتان)</option>
							<option>گیجی طولانی بعدعمل</option>
							<option>اضطراب شدید قبل عمل</option>
							<option>تنگی نفس/مشکلات کارگذاری لوله تنفسی</option>
						</select>
						<span id="anesthesia-duplicate-error" class="help-block">این گزینه انتخاب شده است</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-4 pull-right">
						<button id="check-list10" type="button" class="col-md-12 btn btn-primary pull-right">انتخاب</button>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 control-label pull-right">
						<textarea name="anesthesia_problem_list" id="save-anesthesia-problem" class="form-control lightblue_input"  rows="3" readonly="readonly">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">آیا ناتوان از انجام امور روزمره شخصی خود هستید؟</label>
					<div for="daily-work" class="col-md-1">
						<input name="daily_problem" id="daily-work" type="checkbox" class="form-control lightblue_input">
						<input id="daily_problem-hide" name="daily_problem" type="hidden" value="false">
					</div>
				</div>
		
				<div class="form-group h4">
					<label class="col-md-9 control-label pull-right">خرخر شبانه دارید؟</label>
					<div class="col-md-1">
						<input name="sleep_appena" id="sleep-apnea" type="checkbox" class="form-control lightblue_input">
						<input id="sleep-apnea-hide" name="sleep_appena" type="hidden" value="false">
					</div>
				</div>
			
				<div class="form-group h4">
					<label class="col-md-12 control-label pull-right">هر مشکلی که در لیست به آن اشاره نشده را ذکر کنید</label>
				</div>

				<div class="form-group">
					<div class="col-md-12">
						<textarea name="other_problems" class="form-control lightblue_input"  rows="2">
						</textarea>
					</div>
				</div>

				<div class="form-group h4">
					<label class="col-md-12 control-label pull-right">سوالات اضافه ای که در خصوص بیهوشی دارید را مرقوم بفرمایید</label>
				</div>

				<div class="form-group">
					<div class="col-md-12">
						<textarea name="anesthesia_question" class="form-control lightblue_input"  rows="2">
						</textarea>
					</div>
				</div>
			
				<legend><h2 class="font_nazanin">بعد از پاسخ گویی به تمام سولات فرم را ارسال کنید</h2></legend>

				<div class="form-group">
					<div class="col-md-6 pull-right">
						<asp:Button Text="ارسال" UseSubmitBehavior="true" OnClick="btn_send_clicked" CssClass="btn btn-success btn-lg col-md-12 pull-right" runat="server" id="submit"></asp:Button>
					</div>
				</div>
		

				<!-- Windows for Operation -->
				<div class="modal fade" id="op-list-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog font_nazanin">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span>
									<span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title" id="op-list-popuplable" style="text-align: center">لیست کامل عمل های جراحی </h4>
							</div>
							<div class="modal-body">
								<asp:DropDownList id="op_list_all" CssClass="form-control lightblue_input" runat="server">
									<asp:ListItem Selected ="true" Text="انتخاب" Value="null"></asp:ListItem>
									<asp:ListItem Text="قلبی ۲" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="قلبی ۳" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="قلبی ۴" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="عروقی ۱" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="عروقی ۲" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="عروقی ۳" Value="heart_1"></asp:ListItem>
									<asp:ListItem Text="عروقی ۴" Value="heart_1"></asp:ListItem>
								</asp:DropDownList>
							</div>
							<div class="modal-footer">
								<button id="op-list-more-choice" type="button" class="btn btn-primary" data-dismiss="modal">انتخاب</button>
								<button type="button" class="btn btn-default pull-left" data-dismiss="modal">خروج</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Windows Popup 2 for Drugs -->
				<div class="modal fade" id="drugs-list-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span>
									<span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title" id="drugs-list-popuplable" style="text-align: center">لیست کامل عمل های جراحی</h4>
							</div>
							<div class="modal-body">
								<asp:DropDownList id="drugs_list_all" CssClass="form-control lightblue_input" runat="server">
									<asp:ListItem Selected ="true" Text="انتخاب" Value="null"></asp:ListItem>
									<asp:ListItem Text="داروی ۱" Value="drug_1"></asp:ListItem>
									<asp:ListItem Text="داروی ۲" Value="drug_2"></asp:ListItem>
									<asp:ListItem Text="داروی ۳" Value="drug_3"></asp:ListItem>
									<asp:ListItem Text="داروی ۴" Value="drug_4"></asp:ListItem>
									<asp:ListItem Text="داروی ۵" Value="drug_5"></asp:ListItem>
									<asp:ListItem Text="داروی ۶" Value="drug_6"></asp:ListItem>
									<asp:ListItem Text="داروی ۷" Value="drug_7"></asp:ListItem>
								</asp:DropDownList>
							</div>
							<div class="modal-footer">
								<button id="drugs-list-more-choice" type="button" class="btn btn-primary" data-dismiss="modal">انتخاب</button>
								<button type="button" class="btn btn-default pull-left" data-dismiss="modal">خروج</button>
							</div>
						</div>
					</div>
				</div>
				<!--End Windows Popup -->
			</form>
		</div>
	</body>
</html>