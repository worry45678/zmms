(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237af3"],{fbbc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form",{attrs:{inline:"","label-position":"left","label-width":36}},[a("FormItem",{attrs:{label:"分区"}},[a("Select",{attrs:{filterable:"",placeholder:"选择检查分区"},on:{"on-change":t.handleChangeZone},model:{value:t.query.zone,callback:function(e){t.$set(t.query,"zone",e)},expression:"query.zone"}},t._l(t.zone_list,function(e){return a("Option",{key:e.name,attrs:{disabled:e.disabled,value:e._id}},[t._v(t._s(e.name))])}))],1),a("Button",{attrs:{icon:"ios-download-outline",loading:t.exportLoading,type:"primary"},on:{click:t.exportExcel}},[t._v("Download")])],1),a("Table",{attrs:{columns:t.columns1,data:t.list}}),a("Page",{attrs:{total:t.total,"show-total":"","page-size":20},on:{"on-change":t.handleChangePage}}),a("Drawer",{attrs:{title:"Basic Drawer",width:1e3,closable:!1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[a("p",[t._v(t._s(t.viewMeter))]),a("p",[t._v("Some contents...")]),a("div",{staticClass:"amap-page-container",style:{width:"100%",height:"600px"}},[a("div",{style:{width:"100%",height:"600px"}},[a("el-amap",{staticClass:"amap-demo",attrs:{vid:"amap",plugin:t.plugin,center:t.center}})],1)])])],1)},i=[],o=a("7e1e"),l=a("0a21"),s={name:"MeterConfigs",data:function(){var t=this;return{value1:!1,viewMeter:"",exportLoading:!1,total:null,query:{zone:null,page:1,pagesize:20},zone_list:[],columns1:[{title:"客户编号",key:"CID"},{title:"远传编号",key:"RTU_ID"},{title:"名称",key:"RTU_NAME"},{title:"安装地址",key:"INSTALL_ADDRESS"},{title:"Action",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.value1=!0,t.viewMeter=a.index}}},"View"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(a.index)}}},"Delete")])}}],list:[],center:[121.59996,31.197646],lng:0,lat:0,loaded:!1,plugin:[{enableHighAccuracy:!0,timeout:100,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"RB",showMarker:!0,showCircle:!0,panToLocation:!0,zoomToAccuracy:!0,extensions:"all",pName:"Geolocation",events:{}}]}},methods:{fetchData:function(){var t=this;this.$Loading.start(),Object(o["j"])(this.query).then(function(e){console.log(e),t.list=e.data.items,t.total=e.data.total,t.$Loading.finish()}),Object(o["t"])().then(function(e){t.zone_list=e.data.zone_list})},handleReachBottom:function(){console.log("bottom")},handleChangePage:function(t){var e=this;this.query.page=t,this.$Loading.start(),Object(o["j"])(this.query).then(function(t){console.log(t),e.list=t.data.items,e.total=t.data.total,e.$Loading.finish()})},handleChangeZone:function(t){var e=this;this.$Loading.start(),Object(o["j"])(this.query).then(function(t){e.list=t.data.items,e.total=t.data.total,e.$Loading.finish()})},exportExcel:function(){if(this.list.length){this.exportLoading=!0;var t={title:["客户编号","远传编号","名称"],key:["CID","RTU_ID","RTU_NAME"],data:this.list,autoWidth:!0,filename:"流量计详情"};l["a"].export_array_to_excel(t),this.exportLoading=!1}else this.$Message.info("表格数据不能为空！")}},created:function(){this.fetchData()}},r=s,c=a("2877"),u=Object(c["a"])(r,n,i,!1,null,null,null);u.options.__file="meter-configs.vue";e["default"]=u.exports}}]);