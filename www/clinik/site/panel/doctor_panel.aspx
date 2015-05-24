<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="doctor_panel.aspx.cs" Inherits="clinik.doctor_panel" %>

<!DOCTYPE html>
<html lang="fa">

	<head runat="server">
		<title>پنل دکتریرن</title>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="description" content="doctors panel">
	    <meta name="author" content="m.gh@linuxmail.org">

	    <link href="../../view/sb-admin/css/bootstrap.min.css" rel="stylesheet">
	    <link href="../../view/sb-admin/css/bootstrap-rtl.min.css" rel="stylesheet">
	    <!-- Custom CSS -->
	    <link href="../../view/sb-admin/css/sb-admin.css" rel="stylesheet">
	    <link href="../../view/sb-admin/css/sb-admin-rtl.css" rel="stylesheet">
	    <!-- Custom Fonts -->
	    <link href="../../view/sb-admin/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	    <!--- clinic custom css-->
	    <link href="../../view/css/font.css" rel="stylesheet">
		<link href="../../view/css/shadow.css" rel="stylesheet">
		<link href="../../view/css/background.css" rel="stylesheet">
		
	</head>

	<body>
	    <div id="wrapper">
	        <!-- Navigation -->
	        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	            <!-- Brand and toggle get grouped for better mobile display -->
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	                    <span class="sr-only">Toggle navigation</span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                </button>
	                <a class="navbar-brand" href="doctor_panel.aspx">پنل دکترین</a>
	            </div>
	            <!-- Top Menu Items -->
	            <ul class="nav navbar-right top-nav">
	                <li class="dropdown">
	                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
	                    <ul class="dropdown-menu message-dropdown">
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="../../view/images/50x50.gif" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>doctor name</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> date</p>
	                                        <p>masseage</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="../../view/images/50x50.gif" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>somr body</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
	                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="../../view/images/50x50.gif" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>some body</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
	                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-footer">
	                            <a href="#">Read All New Messages</a>
	                        </li>
	                    </ul>
	                </li>
	                <li class="dropdown">
	                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
	                    <ul class="dropdown-menu alert-dropdown">
	                        <li>
	                            <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
	                        </li>
	                        <li class="divider"></li>
	                        <li>
	                            <a href="#">View All</a>
	                        </li>
	                    </ul>
	                </li>
	                <li class="dropdown">
	                	<asp:HyperLink id="name_family_label" CssClass="dropdown-toggle" href="#" data-toggle="dropdown" runat="server">
	                		<!-- write in codebehine -->
	                    </asp:HyperLink>
	                    <ul class="dropdown-menu">
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
	                        </li>
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
	                        </li>
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
	                        </li>
	                        <li class="divider"></li>
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
	            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
	            <div class="collapse navbar-collapse navbar-ex1-collapse">
	                <ul class="nav navbar-nav side-nav">
	                    <li class="active">
	                        <a href="doctor_panel.aspx"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
	                    </li>
	                    <li>
	                        <a href="doctor_panel_all_form.aspx"><i class="fa fa-fw fa-bar-chart-o"></i> مشاهده همه ی فرم ها</a>
	                    </li>
	                    <li>
	                        <a href="tables.html"><i class="fa fa-fw fa-table"></i> Tables</a>
	                    </li>
	                    <li>
	                        <a href="forms.html"><i class="fa fa-fw fa-edit"></i> Forms</a>
	                    </li>
	                    <li>
	                        <a href="bootstrap-elements.html"><i class="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
	                    </li>
	                    <li>
	                        <a href="bootstrap-grid.html"><i class="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
	                    </li>
	                    <li>
	                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw fa-caret-down"></i></a>
	                        <ul id="demo" class="collapse">
	                            <li>
	                                <a href="#">Dropdown Item</a>
	                            </li>
	                            <li>
	                                <a href="#">Dropdown Item</a>
	                            </li>
	                        </ul>
	                    </li>
	                    <li>
	                        <a href="blank-page.html"><i class="fa fa-fw fa-file"></i> Blank Page</a>
	                    </li>
	                    <li>
	                        <a href="index-rtl.html"><i class="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
	                    </li>
	                </ul>
	            </div>
	            <!-- /.navbar-collapse -->
	        </nav>

			<div id="page-wrapper">
				<div class="container-fluid">
	                <!-- Page Heading -->
	                <div class="row">
	                    <div class="col-lg-12">
	                        <h1 class="page-header">
	                            Blank Page
	                            <small>Subheading</small>
	                        </h1>
	                        <ol class="breadcrumb">
	                            <li>
	                                <i class="fa fa-dashboard"></i>  <a href="doctor_panel.aspx">پنل</a>
	                            </li>
	                            <li class="active">
	                                <i class="fa fa-file"></i> Blank Page
	                            </li>
	                        </ol>
	                    </div>
	                </div>
	            </div>
	            <!-- /.container-fluid -->
	        </div>
	        <!-- /#page-wrapper -->
	    </div>
	    <!-- /#wrapper -->

	    <!-- jQuery -->
	    <script src="../../view/sb-admin/js/jquery.js"></script>
	    <!-- Bootstrap Core JavaScript -->
	    <script src="../../view/sb-admin/js/bootstrap.min.js"></script>
	    </body>
</html>
