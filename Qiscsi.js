<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>QuickStor</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="dist/css/fonts/google-fonts.css">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
  <!-- Chartjs -->
  <link rel="stylesheet" href="plugins/chart.js/Chart.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">

</head>
<!--
`body` tag options:

  Apply one or more of the following classes to to the body tag
  to get the desired effect

  * sidebar-collapse
  * sidebar-mini
-->
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="./QuickStor.html" class="nav-link">Dashboard</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="background: rgb(19, 16, 16);">
    <!-- Brand Logo -->
    <a href="./QuickStor.html" class="brand-link navbar-brand ">
      <img src="img/logo.png" alt="nothing" class="" style="opacity: .8">
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item system  auths Box_Users Active_Directory Error">
             <a href="#" class="nav-link  " style="background-color: #162432;" >
               <i class="nav-icon fa fa-cogs "></i>
               <p>
                 System configuration
                 <i class="right fas fa-angle-left"></i>
               </p>
             </a>
             <ul class="nav nav-treeview">
               <li class="nav-item auths Active_Directory" >
                 <a href="./Qactivedirectory.html" class="nav-link">
                   <i class="fab fa-windows nav-icon" ></i>
                   <p>Active Directory</p>
                 </a>
               </li>
               <li class="nav-item auths Box_Users">
                 <a href="./Qusers.html" class="nav-link" >
                   <i class="fas fa-user-plus nav-icon" ></i>
                   <p>Users</p>
                 </a>
               </li>
               <li class="nav-item auths Box_Users">
                 <a href="./Qgroups.html" class="nav-link" >
                   <i class="fas fa-users nav-icon" ></i>
                   <p> Groups</p>
                 </a>
               </li>
               <li class="nav-item auths Error">
                 <a href="./Qnodes.html" class="nav-link"  >
                   <i class="fas fa-server nav-icon" ></i>
                   <p>Nodes</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="nav-item  status auths Service_Charts Logs">
              <a href="#" class="nav-link " style="background-color: #162432;">
                <i class="nav-icon fas fa-stream "></i>
                <p>
                  System Status
                  <i class="right  fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item auths Logs">
                  <a href="./QLogs.html" class="nav-link" >
                    <i class="fas fa-clipboard-list nav-icon" ></i>
                    <p>Logs</p>
                  </a>
                </li>
                <li class="nav-item auths Service_Charts">
                  <a href="./Qserviceperformance.html" class="nav-link">
                    <i class="far fa-chart-bar nav-icon" ></i>
                    <p>Service Performance</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item menu-open Volumes auths SnapShots ISCSI CIFS NFS HOME">
               <a href="#" class="nav-link active" >
                 <i class="nav-icon fas fa-stream "></i>
                 <p>
                   Volumes
                   <i class="right  fas fa-angle-left"></i>
                 </p>
               </a>
               <ul class="nav nav-treeview">
                 <li class="nav-item auths CIFS">
                   <a href="./Qcifs.html" class="nav-link" style="background-color: #1f232c;">
                     <i class="fab fa-windows nav-icon" ></i>
                     <p>CIFS</p>
                   </a>
                 </li>
                 <li class="nav-item auths NFS">
                   <a href="./Qnfs.html" class="nav-link">
                     <i class="fab fa-linux nav-icon" ></i>
                     <p> NFS</p>
                   </a>
                 </li>
                 <li class="nav-item auths HOME">
                   <a href="./Qhome.html" class="nav-link">
                     <i class="fas fa-house-user nav-icon" ></i>
                     <p> Home Folders</p>
                   </a>
                 </li>
                 <li class="nav-item auths SnapShots ">
                   <a href="./Qsnapshots.html" class="nav-link">
                     <i class="fas fa-camera nav-icon" ></i>
                     <p>Snapshots</p>
                   </a>
                 </li>

               </ul>
            </li>
            <li class="nav-item replication auths Replication Partners Senders">
                <a href="#" class="nav-link " style="background-color: #162432;">
                  <i class="nav-icon far fa-clone "></i>
                  <p>
                    Replication
                    <i class="right  fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item auths Partners" >
                    <a href="./Qpartner.html" class="nav-link">
                      <i class="fas fa-hands-helping nav-icon" ></i>
                      <p>Partner</p>
                    </a>
                  </li>
                  <li class="nav-item auths Senders">
                    <a href="./Qsender.html" class="nav-link">
                      <i class="fas fa-paper-plane nav-icon" ></i>
                      <p> Sender</p>
                    </a>
                  </li>
                  <li class="nav-item auths Replication">
                    <a href="./Qreceived.html" class="nav-link">
                      <i class="fab fa-perbyte nav-icon" ></i>
                      <p>Received</p>
                    </a>
                  </li>

                </ul>
            </li>
            <li class="nav-item  Pools auths DiskGroups">
               <a href="#" class="nav-link " style="background-color: #162432;">
                 <i class="nav-icon fas fa-stream "></i>
                 <p>
                   Pools
                   <i class="right  fas fa-angle-left"></i>
                 </p>
               </a>
               <ul class="nav nav-treeview">
                 <li class="nav-item auths DiskGroups">
                   <a href="./Qdg.html" class="nav-link">
                     <i class="far fa-clipboard-list nav-icon" ></i>
                     <p>Disk Groups</p>
                   </a>
                 </li>
               </ul>
             </li>
             <li class="nav-item  Settings auths Uploadch UserPrivilegesch">
                <a href="#" class="nav-link " style="background-color: #162432;">
                  <i class="nav-icon fas fa-cog "></i>
                  <p>
                    Settings
                    <i class="right  fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item auths UserPrivilegesch">
                    <a href="./Quserpriv.html" class="nav-link">
                      <i class="fas fa-unlock-alt nav-icon" ></i>
                      <p>User Privelideges</p>
                    </a>
                  </li>
                  <li class="nav-item auths Uploadch">
                    <a href="./Qupdates.html" class="nav-link">
                      <i class="fas fa-pen-fancy nav-icon" ></i>
                      <p>Updates</p>
                    </a>
                  </li>

                </ul>
              </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">ISCSI volume Management</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="./login.html">Logout</a></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
           <div class="card tocheck ">
              <!-- form start -->
              <form>
                <div class="card-header">
                  <h3 class="card-title">New Volume</h3>
                </div>

                <div class="card-body">
                  <div class="form-group row">
		                <label  for="Pool2" class="col-1 col-form-label" >Pool</label>
                    <select  class=" select2 form-control pool  col-3" id="Pool2">
                      <option></option>
                    </select>
                    <label  for="volname" class="offset-1 col-1 col-form-label">Volume</label>
                    <input type="text" class="form-control col-2 " id="volname" placeholder="Volume Name">
                    <label  for="volsize" class="offset-1 col-1 col-form-label">Size (GB)</label>
                    <input type="number" min="1"  step="1" value=1 class="form-control col-1 "  id="volsize">
                  </div>
                  
                  <div class="form-group row">
                    <label  for="Address"  class="col-2 col-form-label">IP Address</label>
                    <input type="text" placeholder="xxx.xxx.xxx.xxx" class="form-control  ipaddress col-2" name="Address" id="Address"  data-inputmask="'alias': 'ip'">
                    <label  for="Subnet"  class="offset-1 col-1 col-form-label">Subnet</label>
                    <input type="number"  min="8" max="32" step="8" value=24 class="form-control  col-1"  id="Subnet">
                    <label  for="portalport"  class="offset-1 col-1 col-form-label">Port</label>
                    <input type="number"  min="3260" max="100000" step="1" value=3260 class="form-control  col-2"  id="portalport">
                  </div>
                  <div class="form-group row">
                    <label  for="initiators" class="col-2 col-form-label">Initiators IQN</label>
                    <input type="text" class="form-control col-10 " id="initiators" placeholder="initiator1,initiator2,initiator3">
                    <sub class="offset-2" style="color:#9d9eaa; margin-bottom:0.2rem; margin-top:0.2rem;">add initiators IQNs comma separated</sub>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" id="createvol" class="btn btn-primary">Add Volume</button>
                </div>
              </form>
            </div> <!-- /.card -->
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div class="chart">
                      <canvas id="quotaChart" style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%;"></canvas>
                    </div>
                  </div>
                </div> <!-- /.card -->
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div class="chart">
                      <canvas id="usedChart" style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%;"></canvas>
                    </div>
                  </div>
                </div> <!-- /.card -->
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div class="chart">
                      <canvas id="usedbysnapshotsChart" style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%;"></canvas>
                    </div>
                  </div>
                </div> <!-- /.card -->
              </div>
             
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body p-0">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Volume Task</th>
                          <th>Progress</th>
                          <th style="width: 40px">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div class="progress progress-xs">
                              <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                            </div>
                          </td>
                          <td><span class="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div class="progress progress-xs">
                              <div class="progress-bar bg-warning" style="width: 70%"></div>
                            </div>
                          </td>
                          <td><span class="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div class="progress progress-xs progress-striped active">
                              <div class="progress-bar bg-primary" style="width: 30%"></div>
                            </div>
                          </td>
                          <td><span class="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div class="progress progress-xs progress-striped active">
                              <div class="progress-bar bg-success" style="width: 90%"></div>
                            </div>
                          </td>
                          <td><span class="badge bg-success">90%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                </div>



              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">ISCSI volume list</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="VolumeList" class="table table-sm table-hover  table-striped" style="font-size:90%;">
                  <thead>
                    <tr>
                      <th style="font-size: 90%;width:10%;">Volume</th>
                      <th style="font-size: 90%;width:10%;">pool</th>
                      <th style="font-size: 90%;width:3%;">Size (GB)</th>
                      <th style="font-size: 90%;width:3%;">Snaps. (MB)</th>
                      <th style="font-size: 90%;width:3%;">comp. %</th>
                      <th style="font-size: 90%;width:15%;">IP Address</th>
                      <th style="font-size: 90%;width:12%;">Port</th>
                      <th style="font-size: 90%;width:50%;">Initiators</th>
                      <th style="font-size: 90%;width:10%;">Need update</th>
                      <th style="font-size: 90%;width:3%;">Remove Volume</th>
                    </tr>

                  </thead>
                  <tbody style="font-size: 90%;">
                    

                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Volume</th>
                      <th>pool</th>
                      <th>Size (GB)</th>
                      <th>Snaps. (MB)</th>
                      <th>comp. %</th>
                      <th>IP Address</th>
                      <th>Port</th>
                      <th>Initiators</th>
                      <th>Need update</th>
                      <th>Remove Volume</th>
                    </tr>
                  </tfoot>
                </table>
                
              </div>
              <!-- /.card-body -->
            </div>

          </div>
        </div> <!-- /.row -->

      </div> <!-- /.container-fluid -->

    </div> <!-- /.content -->

  </div> <!-- /.content-wrapper -->


  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<script>
  var prot = 'ISCSI';
 </script>
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE -->
<script src="dist/js/adminlte.js"></script>
<!-- DataTables  & Plugins -->
<script src="plugins/select2/js/select2.full.min.js"></script>
<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="plugins/jszip/jszip.min.js"></script>
<script src="plugins/pdfmake/pdfmake.min.js"></script>
<script src="plugins/pdfmake/vfs_fonts.js"></script>
<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- OPTIONAL SCRIPTS -->
<script src="dist/js/Qjquery.inputmask.bundle.js"></script>
<script src="dist/js/Qiscsi.js" ></script>

<script src="plugins/chart.js/Chart.bundle.min.js"></script>
<script src="dist/js/demo.js"></script>
<script src="dist/js/Qmain.js"></script>


</body>
</html>
