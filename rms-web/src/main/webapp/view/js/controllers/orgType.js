app.controller('OrgTypeCtrl', ['$scope', '$http', 'i18nService', 'ngDialog', 'toaster', '$state', 'orgTypeService', function ($scope, $http, i18nService, ngDialog, toaster, $state, orgTypeService) {
    i18nService.setCurrentLang('zh-cn');
    $scope.orgType = {};
    $scope.selectOrgTypes = [];
    $scope.addFlag = true;
    var getPage = function (curPage, pageSize) {
        orgTypeService.getAll().then(function (data) {
            var firstRow = (curPage - 1) * pageSize;
            $scope.gridOptions.totalItems = data.data.length;
            $scope.gridOptions.data = data.data.slice(firstRow, firstRow + pageSize);
        }, function () {
            toaster.pop("error", "Error", "查询失败");
        });
    };

    $scope.gridOptions = {
        columnDefs: [{
            field: "sn",
            displayName: '组织机构类型编号',
            enableCellEdit: false
        }, {
            field: "name",
            displayName: '组织机构类型名称',
            enableCellEdit: false
        }, {
            field: "insertDate",
            displayName: '添加时间',
            cellFilter: 'date:"yyyy-M-dd HH:mm:ss"',
            enableCellEdit: false
        }, {
            field: "upDateDate",
            displayName: '更新时间',
            cellFilter: 'date:"yyyy-MM-dd HH:mm:ss"',
            enableCellEdit: false
        }, {
            field: "insertUserId",
            displayName: '添加人员',
            enableCellEdit: false
        }, {
            field: "upDateUserId",
            displayName: '更新人员',
            enableCellEdit: false
        }, {
            field: "belongTo",
            displayName: '所属系统',
            enableCellEdit: false
        }
        ],
        enableFiltering: true,
        rowHeight: 35,
        //-------- 分页属性 ----------------
        enablePagination: true, //是否分页，默认为true
        enablePaginationControls: true, //使用默认的底部分页
        paginationPageSizes: [20, 50, 100], //每页显示个数可选项
        paginationCurrentPage: 1, //当前页码
        paginationPageSize: 20, //每页显示个数
        //paginationTemplate:"<div></div>", //自定义底部分页代码
        totalItems: 0, // 总数量
        useExternalPagination: true,//是否使用分页按钮
        enableSorting: true, //是否排序
        useExternalSorting: false, //是否使用自定义排序规则
        enableGridMenu: true, //是否显示grid 菜单
        showGridFooter: true, //是否显示grid footer
        enableHorizontalScrollbar: 1, //grid水平滚动条是否显示, 0-不显示  1-显示
        enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
        //----------- 选中 ----------------------
        enableFooterTotalSelected: true, // 是否显示选中的总数，默认为true, 如果显示，showGridFooter 必须为true
        enableFullRowSelection: true, //是否点击行任意位置后选中,默认为false,当为true时，checkbox可以显示但是不可选中
        enableRowHeaderSelection: true, //是否显示选中checkbox框 ,默认为true
        enableRowSelection: true, // 行选择是否可用，默认为true;
        enableSelectAll: true, // 选择所有checkbox是否可用，默认为true;
        enableSelectionBatchEvent: true, //默认true
        modifierKeysToMultiSelect: false,//默认false,为true时只能 按ctrl或shift键进行多选, multiSelect 必须为true;
        multiSelect: true,// 是否可以选择多个,默认为true;
        noUnselect: false,//默认false,选中后是否可以取消选中
        selectionRowHeaderWidth: 35,//默认30 ，设置选择列的宽度；
        //--------------导出----------------------------------
        exporterAllDataFn: function () {
            return getPage(1, $scope.gridOptions.totalItems);
        },
        exporterCsvColumnSeparator: ',',
        exporterCsvFilename: 'download.csv',
        exporterFieldCallback: function (grid, row, col, value) {
            if (value == 50) {
                value = "可以退休";
            }
            return value;
        },
        exporterHeaderFilter: function (displayName) {
            return 'col: ' + name;
        },
        exporterHeaderFilterUseName: true,
        exporterMenuCsv: true,
        exporterMenuLabel: "Export",
        exporterMenuPdf: true,
        exporterOlderExcelCompatibility: false,
        exporterPdfCustomFormatter: function (docDefinition) {
            docDefinition.styles.footerStyle = {bold: true, fontSize: 10};
            return docDefinition;
        },
        exporterPdfFooter: {
            text: 'My footer',
            style: 'footerStyle'
        },
        exporterPdfDefaultStyle: {
            fontSize: 11, font: 'simblack' //font 设置自定义字体
        },
        exporterPdfFilename: 'download.pdf',
        /* exporterPdfFooter : {
         columns: [
         'Left part',
         { text: 'Right part', alignment: 'right' }
         ]
         },
         或 */
        exporterPdfFooter: function (currentPage, pageCount) {
            return currentPage.toString() + ' of ' + pageCount;
        },
        exporterPdfHeader: function (currentPage, pageCount) {
            return currentPage.toString() + ' of ' + pageCount;
        },
        exporterPdfMaxGridWidth: 720,
        exporterPdfOrientation: 'landscape',//  'landscape' 或 'portrait' pdf横向或纵向
        exporterPdfPageSize: 'A4',// 'A4' or 'LETTER'
        exporterPdfTableHeaderStyle: {
            bold: true,
            fontSize: 12,
            color: 'black'
        },
        exporterPdfTableLayout: null,
        exporterPdfTableStyle: {
            margin: [0, 5, 0, 15]
        },
        exporterSuppressColumns: ['buttons'],
        exporterSuppressMenu: false,
        //---------------api---------------------
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            //分页按钮事件
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                if (getPage) {
                    getPage(newPage, pageSize);
                }
            });
            //行选中事件
            $scope.gridApi.selection.on.rowSelectionChanged($scope, function (row, event) {
                if (row) {
                    var entity = row.entity;
                    var flag = false;
                    var postion = 0;
                    for (var i = 0; i < $scope.selectOrgTypes.length; i++) {
                        if ($scope.selectOrgTypes[i].id == entity.id) {
                            flag = true;
                            postion = i;
                            break;
                        }
                    }
                    if (flag) {
                        $scope.selectOrgTypes.splice(postion, 1);
                    } else {
                        $scope.selectOrgTypes.push(entity);
                    }
                    console.log($scope.selectOrgTypes)
                }
            });

            $scope.gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows, event) {
                if ($scope.selectOrgTypes.length == $scope.gridOptions.totalItems || $scope.selectOrgTypes.length == $scope.gridOptions.pageSize) {
                    $scope.selectOrgTypes = [];
                } else {
                    $scope.selectOrgTypes = $scope.gridOptions.data.concat();
                }
                console.error($scope.selectOrgTypes)
            })
        }
    };
    getPage(1, $scope.gridOptions.paginationPageSize);
    $scope.launch = function () {
        ngDialog.open({
            id: 'addOrgTypeDialog',
            template: 'view/tpl/form_orgType_add.html',//模式对话框内容为test.html
            scope: $scope //将scope传给test.html,以便显示地址详细信息
        });
    }; // end launch
    $scope.add = function () {
        orgTypeService.save($scope.orgType).then(function (data) {
            if(data.success){
                if ($scope.addFlag && data.data) {
                    $scope.gridOptions.data.unshift(data.data)
                }
                $scope.orgType = {};
                toaster.pop("success", "Success", "添加成功");
                ngDialog.close('addOrgTypeDialog');
            }else{
                console.info(data.errorType);
                if(data.errorType == 'RuntimeException'){
                    $state.go('app.page.404',{status: data.status, msg: data.msg});
                    ngDialog.close('addOrgTypeDialog');
                }else{
                    toaster.pop("error", "Error", data.msg);
                }
            }
        }, function(){
            toaster.pop("error", "Error", "添加失败");
            ngDialog.close('addOrgTypeDialog');
        })
    }; // end add

    $scope.delete = function () {
        var ids = [];
        for(var i = 0; i<$scope.selectOrgTypes.length; i++ ){
            ids.push($scope.selectOrgTypes[i].id);
        }

        if(ids.length<1){
            swal("刪除失败!", "请至少选择一条记录.", "error");
            return;
        }
        swal({
            title: "确定刪除?",
            text: "记录刪除后不能被恢復",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            closeOnConfirm: false
        }, function(){
            orgTypeService.delete(ids).then(function (data) {
                if(data.success){
                    swal("刪除成功!", "选中記录已被成功刪除.", "success");
                    getPage($scope.gridOptions.paginationCurrentPage,$scope.gridOptions.paginationPageSize)
                }else{
                    $state.go('app.page.404',{status: data.status, msg: data.msg});
                }
            }, function (data) {
                $state.go('app.page.404',{status: data.status, msg: data.msg});
            });
        });
    }; // end add

    $scope.update = function () {
        if ($scope.selectOrgTypes.length > 1) {
            swal("","每次只能更新一条数据!","error")
            return;
        }
        ;
        if ($scope.selectOrgTypes.length == 0) {
            swal("","请选择要更新的数据","error");
            return;
        }
        ;
        $scope.orgType = $scope.selectOrgTypes[0];
        $scope.addFlag = false;
        ngDialog.open({
            id: 'updateOrgTypeDialog',
            template: 'view/tpl/form_orgType_add.html',//模式对话框内容为test.html
            scope: $scope //将scope传给test.html,以便显示地址详细信息
        });
    }; // end add
}]);