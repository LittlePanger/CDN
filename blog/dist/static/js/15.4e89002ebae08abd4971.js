webpackJsonp([15],{"/Xzp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("P9l9"),l={name:"settings",data:function(){return{editable:!1,socialData:[],personalData:{},formData:new FormData,pageData:[],pageSrcList:[],navData:[],activeName:"first"}},methods:{tabChange:function(){this.editable=!1},addImg:function(e){var a=this.$refs.inputer.files[0];if(a.size>1048576)return this.$message.error("请选择1M以内的图片！"),!1;this.formData.append("file",a)},saveBtn:function(){var e=this;if(this.editable=!1,"first"===this.activeName)Object(s.r)(this.socialData).then(function(e){});else if("second"===this.activeName){var a=this.personalData;for(var t in a)a.hasOwnProperty(t)&&(this.formData.delete(t),this.formData.append(t,a[t]));Object(s.p)(this.formData).then(function(a){e.personalData=a.data})}else"third"===this.activeName?Object(s.l)(this.pageData).then(function(a){e.pageData=a.data}):"fourth"===this.activeName&&Object(s.i)(this.navData).then(function(e){})}},mounted:function(){var e=this;Object(s.q)().then(function(a){e.socialData=a.data}),Object(s.o)().then(function(a){e.personalData=a.data}),Object(s.k)().then(function(a){e.pageData=a.data;for(var t=0;t<e.pageData.length;t++)e.pageSrcList.push(e.pageData[t].src)}),Object(s.h)().then(function(a){var t=a.data;for(var s in t)for(var l in t[s])e.navData.push(t[s][l])})}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-tabs",{on:{"tab-click":e.tabChange},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"社交信息",name:"first"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.socialData}},[t("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name",t)},expression:"scope.row.name"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"href",label:"链接",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.href,callback:function(t){e.$set(a.row,"href",t)},expression:"scope.row.href"}}),e._v(" "),t("a",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],attrs:{href:a.row.href}},[e._v(e._s(a.row.name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.icon,callback:function(t){e.$set(a.row,"icon",t)},expression:"scope.row.icon"}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],class:a.row.icon,style:{color:a.row.color}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"color",label:"颜色"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-color-picker",{attrs:{disabled:!e.editable,"show-alpha":""},model:{value:a.row.color,callback:function(t){e.$set(a.row,"color",t)},expression:"scope.row.color"}})]}}])})],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"个人信息",name:"second"}},[t("div",{staticClass:"second-div"},[t("span",[e._v("昵称:")]),e._v(" "),t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:e.personalData.name,callback:function(a){e.$set(e.personalData,"name",a)},expression:"personalData.name"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(e.personalData.name))])],1),e._v(" "),t("div",{staticClass:"second-div"},[t("span",[e._v("头像:")]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],ref:"inputer",attrs:{type:"file"},on:{change:e.addImg}}),e._v(" "),t("el-image",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],staticStyle:{width:"40px"},attrs:{src:e.personalData.avatar,fit:"scale-down",previewSrcList:[e.personalData.avatar]}})],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"页面信息",name:"third"}},[t("el-table",{staticStyle:{width:"600px"},attrs:{data:e.pageData}},[t("el-table-column",{attrs:{prop:"title",label:"名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.title,callback:function(t){e.$set(a.row,"title",t)},expression:"scope.row.title"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.title))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"url",label:"链接名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.url,callback:function(t){e.$set(a.row,"url",t)},expression:"scope.row.url"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.url))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"src",label:"封面",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.src,callback:function(t){e.$set(a.row,"src",t)},expression:"scope.row.src"}}),e._v(" "),t("el-image",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],staticStyle:{width:"160px"},attrs:{src:a.row.src,fit:"scale-down",previewSrcList:e.pageSrcList}})]}}])})],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"导航设置",name:"fourth"}},[t("el-table",{staticStyle:{width:"600px"},attrs:{data:e.navData}},[t("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name",t)},expression:"scope.row.name"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"url",label:"链接",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.url,callback:function(t){e.$set(a.row,"url",t)},expression:"scope.row.url"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.url))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"icon",label:"图标",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.icon,callback:function(t){e.$set(a.row,"icon",t)},expression:"scope.row.icon"}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],class:a.row.icon})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"position",label:"位置"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],attrs:{placeholder:"请输入内容"},model:{value:a.row.position,callback:function(t){e.$set(a.row,"position",t)},expression:"scope.row.position"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}]},[e._v(e._s(a.row.position))])]}}])})],1)],1)],1),e._v(" "),t("div",{staticClass:"header-button"},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],on:{click:function(a){e.editable=!0}}},[e._v("编辑")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"}],on:{click:function(a){e.editable=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{on:{click:e.saveBtn}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var i=t("C7Lr")(l,o,!1,function(e){t("7RdL")},"data-v-0dd26fe0",null);a.default=i.exports},"7RdL":function(e,a){}});
//# sourceMappingURL=15.4e89002ebae08abd4971.js.map