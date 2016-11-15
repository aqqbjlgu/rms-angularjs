// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   ['view/vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
      sparkline:      ['view/vendor/jquery/charts/sparkline/jquery.sparkline.min.js'],
      plot:           ['view/vendor/jquery/charts/flot/jquery.flot.min.js',
                          'view/vendor/jquery/charts/flot/jquery.flot.resize.js',
                          'view/vendor/jquery/charts/flot/jquery.flot.tooltip.min.js',
                          'view/vendor/jquery/charts/flot/jquery.flot.spline.js',
                          'view/vendor/jquery/charts/flot/jquery.flot.orderBars.js',
                          'view/vendor/jquery/charts/flot/jquery.flot.pie.min.js'],
      slimScroll:     ['view/vendor/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       ['view/vendor/jquery/sortable/jquery.sortable.js'],
      nestable:       ['view/vendor/jquery/nestable/jquery.nestable.js',
                          'view/vendor/jquery/nestable/nestable.css'],
      filestyle:      ['view/vendor/jquery/file/bootstrap-filestyle.min.js'],
      slider:         ['view/vendor/jquery/slider/bootstrap-slider.js',
                          'view/vendor/jquery/slider/slider.css'],
      chosen:         ['view/vendor/jquery/chosen/chosen.jquery.min.js',
                          'view/vendor/jquery/chosen/chosen.css'],
      TouchSpin:      ['view/vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                          'view/vendor/jquery/spinner/jquery.bootstrap-touchspin.css'],
      wysiwyg:        ['view/vendor/jquery/wysiwyg/bootstrap-wysiwyg.js',
                          'view/vendor/jquery/wysiwyg/jquery.hotkeys.js'],
      dataTable:      ['view/vendor/jquery/datatables/jquery.dataTables.min.js',
                          'view/vendor/jquery/datatables/dataTables.bootstrap.js',
                          'view/vendor/jquery/datatables/dataTables.bootstrap.css'],
      vectorMap:      ['view/vendor/jquery/jvectormap/jquery-jvectormap.min.js',
                          'view/vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                          'view/vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                          'view/vendor/jquery/jvectormap/jquery-jvectormap.css'],
      footable:       ['view/vendor/jquery/footable/footable.all.min.js',
                          'view/vendor/jquery/footable/footable.core.css']
      }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      'view/vendor/modules/ng-grid/ng-grid.min.js',
                      'view/vendor/modules/ng-grid/ng-grid.min.css',
                      'view/vendor/modules/ng-grid/theme.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'view/vendor/modules/ui-grid/ui-grid.min.js',
                      'view/vendor/modules/ui-grid/ui-grid.min.css',
                      'view/vendor/modules/ui-grid/ui-grid.woff'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      'view/vendor/modules/angular-ui-select/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'view/vendor/modules/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['view/vendor/modules/angular-ui-calendar/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'view/vendor/modules/ngImgCrop/ng-img-crop.js',
                      'view/vendor/modules/ngImgCrop/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      'view/vendor/modules/angular-bootstrap-nav-tree/abn_tree_directive.js',
                      'view/vendor/modules/angular-bootstrap-nav-tree/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      'view/vendor/modules/angularjs-toaster/toaster.js',
                      'view/vendor/modules/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      'view/vendor/modules/textAngular/textAngular-sanitize.min.js',
                      'view/vendor/modules/textAngular/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      'view/vendor/modules/angular-slider/angular-slider.min.js',
                      'view/vendor/modules/angular-slider/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'view/vendor/modules/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'view/vendor/modules/videogular/plugins/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'view/vendor/modules/videogular/plugins/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'view/vendor/modules/videogular/plugins/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'view/vendor/modules/videogular/plugins/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'view/vendor/modules/videogular/plugins/ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;