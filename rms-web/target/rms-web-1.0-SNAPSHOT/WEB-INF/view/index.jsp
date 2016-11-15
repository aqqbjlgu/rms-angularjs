<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en" data-ng-app="app">
<head>
  <meta charset="utf-8" />
  <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />-->
  <title>Be Angular | Bootstrap Admin Web App with AngularJS</title>
  <meta name="description" content="app, web app, responsive, responsive layout, admin, admin panel, admin dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="view/css/bootstrap.css" type="text/css" />
  <link rel="stylesheet" href="view/css/animate.css" type="text/css" />
  <link rel="stylesheet" href="view/css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="view/css/simple-line-icons.css" type="text/css" />
  <link rel="stylesheet" href="view/css/font.css" type="text/css" />
  <link rel="stylesheet" href="view/css/app.css" type="text/css" />
  <link rel="stylesheet" href="view/css/ngDialog.min.css" type="text/css" />
  <link rel="stylesheet" href="view/css/ngDialog-custom-width.css" type="text/css" />
  <link rel="stylesheet" href="view/css/ngDialog-theme-default.min.css" type="text/css" />
  <link rel="stylesheet" href="view/css/ngDialog-theme-plain.min.css" type="text/css" />
  <link rel="stylesheet" href="view/css/icons.css" type="text/css" />
  <link rel="stylesheet" href="view/css/errorMessage.css" type="text/css" />
  <link rel="stylesheet" href="view/vendor/angular/sweet-alert/sweet-alert.css" type="text/css" />
  <link rel="stylesheet" href="view/vendor/modules/angularjs-toaster/toaster.css" type="text/css" />
</head>
<body ng-controller="AppCtrl">
  <div class="app"
       id="app"
       ng-class="{
        'app-header-fixed':app.settings.headerFixed,
        'app-aside-fixed':app.settings.asideFixed,
        'app-aside-folded':app.settings.asideFolded,
        'app-aside-dock':app.settings.asideDock,
        'container':app.settings.container
        }" ui-view>
  </div>


  <!-- jQuery -->
  <script src="view/vendor/jquery/jquery.min.js"></script>

  <!-- Angular -->
  <script src="view/vendor/angular/angular.js"></script>
  
  <script src="view/vendor/angular/angular-animate/angular-animate.js"></script>
  <script src="view/vendor/angular/angular-cookies/angular-cookies.js"></script>
  <script src="view/vendor/angular/angular-resource/angular-resource.js"></script>
  <script src="view/vendor/angular/angular-sanitize/angular-sanitize.js"></script>
  <script src="view/vendor/angular/angular-touch/angular-touch.js"></script>
<!-- Vendor -->
  <script src="view/vendor/angular/angular-ui-router/angular-ui-router.js"></script>
  <script src="view/vendor/angular/ngstorage/ngStorage.js"></script>
  <script src="view/vendor/modules/ui-grid/ui-grid.min.js"></script>
  <script src="view/vendor/angular/angular-dialog/ngDialog.js"></script>
  <script src="view/vendor/angular/sweet-alert/sweet-alert.min.js"></script>
  <script src="view/vendor/modules/angularjs-toaster/toaster.js"></script>

  <!-- bootstrap -->
  <script src="view/vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <!-- lazyload -->
  <script src="view/vendor/angular/oclazyload/ocLazyLoad.js"></script>
  <!-- translate -->
  <script src="view/vendor/angular/angular-translate/angular-translate.js"></script>
  <script src="view/vendor/angular/angular-translate/loader-static-files.js"></script>
  <script src="view/vendor/angular/angular-translate/storage-cookie.js"></script>
  <script src="view/vendor/angular/angular-translate/storage-local.js"></script>

  <!-- App -->
  <script src="view/js/app.js"></script>
  <script src="view/js/config.js"></script>
  <script src="view/js/config.lazyload.js"></script>
  <script src="view/js/config.router.js"></script>
  <script src="view/js/main.js"></script>
  <script src="view/js/services/ui-load.js"></script>
  <script src="view/js/filters/fromNow.js"></script>
  <script src="view/js/directives/setnganimate.js"></script>
  <script src="view/js/directives/ui-butterbar.js"></script>
  <script src="view/js/directives/ui-focus.js"></script>
  <script src="view/js/directives/ui-fullscreen.js"></script>
  <script src="view/js/directives/ui-jq.js"></script>
  <script src="view/js/directives/ui-module.js"></script>
  <script src="view/js/directives/ui-nav.js"></script>
  <script src="view/js/directives/ui-scroll.js"></script>
  <script src="view/js/directives/ui-shift.js"></script>
  <script src="view/js/directives/ui-toggleclass.js"></script>
  <script src="view/js/directives/ui-validate.js"></script>
  <script src="view/js/controllers/bootstrap.js"></script>
  <!-- Lazy loading -->
</body>
</html>