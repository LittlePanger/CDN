webpackJsonp([5],{CkL2:function(t,n,o){t.exports=o.p+"static/img/404pig.c897630.gif"},PTOc:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={name:"notFound",data:function(){return{src404:"",countdown:5,clock:""}},methods:{getImg:function(){var t=Math.floor(10*Math.random()+1)%2==0?"k2":"k1",n={k1:o("VJ4W"),k2:o("CkL2")};this.src404=n[t]},countDown:function(){var t=this;this.clock=window.setInterval(function(){t.countdown--},1e3)},goBack:function(){clearInterval(this.clock),this.$router.go(-1)}},watch:{countdown:function(t){0===t&&this.goBack()}},mounted:function(){this.getImg(),this.countDown()}},e={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("img",{attrs:{src:t.src404,alt:""}}),t._v(" "),o("div",[o("p",[t._v(t._s(t.countdown)+"秒后返回上一页")]),t._v(" "),o("router-link",{attrs:{to:"/"}},[o("el-button",{attrs:{type:"text"}},[t._v("返回首页")])],1),t._v(" "),o("el-button",{attrs:{type:"text"},on:{click:t.goBack}},[t._v("返回上一页")])],1)])},staticRenderFns:[]};var i=o("C7Lr")(c,e,!1,function(t){o("dWP+")},"data-v-aa03ba68",null);n.default=i.exports},VJ4W:function(t,n,o){t.exports=o.p+"static/img/404cat.50e6717.gif"},"dWP+":function(t,n){}});
//# sourceMappingURL=5.6de5405db776c89a293e.js.map