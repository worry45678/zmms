(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54463a74"],{b606:function(e,l,a){"use strict";a.r(l);var s=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("Card",{attrs:{shadow:""}},[e._v("\n    树状表格组件tree-table-vue，基于"),a("a",{attrs:{href:"https://github.com/MisterTaki/vue-table-with-tree-grid"}},[e._v("vue-table-with-tree-grid")]),e._v("进行开发，修复了一些bug，添加了一些新属性\n    "),a("p",[a("b",[e._v("支持使用slot-scope进行自定义列渲染内容")])]),a("p",[e._v("文档请看"),a("a",{attrs:{href:"https://github.com/lison16/tree-table-vue"}},[e._v("https://github.com/lison16/tree-table-vue")])]),a("tree-table",{attrs:{"expand-key":"sex","expand-type":!1,selectable:!1,columns:e.columns,data:e.data},scopedSlots:e._u([{key:"likes",fn:function(l){return[a("Button",{on:{click:function(a){e.handle(l)}}},[e._v("123")])]}}])})],1)],1)},t=[],o={name:"tree_table_page",data:function(){return{columns:[{title:"name",key:"name",width:"400px"},{title:"sex",key:"sex",minWidth:"50px"},{title:"score",key:"score"},{title:"likes",key:"likes",minWidth:"200px",type:"template",template:"likes"}],data:[{name:"Jack",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]}]},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]},{name:"Tom",sex:"male",likes:["football","basketball"],score:20},{name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]}},methods:{handle:function(e){console.log(e)}}},b=o,n=(a("c8e1"),a("2877")),i=Object(n["a"])(b,s,t,!1,null,null,null);i.options.__file="index.vue";l["default"]=i.exports},b96e:function(e,l,a){},c8e1:function(e,l,a){"use strict";var s=a("b96e"),t=a.n(s);t.a}}]);