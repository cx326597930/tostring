(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f58197","chunk-2d0bd635"],{"1d31":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lin-container"},[n("div",{staticClass:"wrap"},[n("el-row",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"lin-wrap"},[n("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入文章标题内容"},model:{value:e.documentTitle,callback:function(t){e.documentTitle=t},expression:"documentTitle"}}),n("tinymce",{staticStyle:{"margin-bottom":"20px"},attrs:{defaultContent:e.tinymceHtml,upload_url:"http://dev.lin.colorful3.com/cms/file/"},on:{change:e.change}}),n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"文章状态:"}},[n("el-select",{attrs:{size:"medium",placeholder:"选择文章分类"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.type_name,value:e.id}})}),1)],1),n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"文章状态:"}},[n("el-radio",{attrs:{label:"0",border:"",size:"medium"},model:{value:e.documentDelFlag,callback:function(t){e.documentDelFlag=t},expression:"documentDelFlag"}},[e._v("正常")]),n("el-radio",{attrs:{label:"1",border:"",size:"medium"},model:{value:e.documentDelFlag,callback:function(t){e.documentDelFlag=t},expression:"documentDelFlag"}},[e._v("不展示")])],1),n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"文章来源:"}},[n("el-radio",{attrs:{label:"1",border:"",size:"medium"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("原创")]),n("el-radio",{attrs:{label:"2",border:"",size:"medium"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("转载")])],1),2==e.radio?n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"转载地址:"}},[n("el-input",{attrs:{placeholder:"请输入原文链接",size:"medium"},model:{value:e.documentUrl,callback:function(t){e.documentUrl=t},expression:"documentUrl"}},[n("template",{slot:"prepend"},[e._v("Http://")])],2)],1):e._e()],1),n("el-form-item",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")]),e.mark?n("el-button",{staticClass:"iconfont icon-fanhui",on:{click:e.back}},[e._v("返 回")]):e._e()],1)],1)],1)],1)])},a=[],c=n("a34a"),u=n.n(c),o=n("9ff2"),i=n("2c7e");function s(e,t,n,r,a,c,u){try{var o=e[c](u),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var c=e.apply(t,n);function u(e){s(c,r,a,u,o,"next",e)}function o(e){s(c,r,a,u,o,"throw",e)}u(void 0)})}}var d={props:{editDocumentID:{type:Number},mark:{type:Number}},data:function(){return{text:"this is default content",form:{context:""},loading:!1,tinymceHtml:"",documentTitle:"",options:[{type_name:"走进创造",id:1},{type_name:"现代真理",id:2},{type_name:"健康饮食",id:3}],key:null,label:null,value:null,radio:"1",documentUrl:null,documentDelFlag:"0"}},components:{Tinymce:o["default"]},methods:{initData:function(){var e=l(u.a.mark(function e(){var t;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["default"].getDocumentTypeList();case 2:t=e.sent,this.options=t;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),change:function(e){console.log(e),this.tinymceHtml=e},save:function(){var e=l(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.documentTitle.trim()){e.next=3;break}return this.$message.error("文章标题不能为空!"),e.abrupt("return",!1);case 3:if(""!=this.tinymceHtml.trim()){e.next=6;break}return this.$message.error("文章内容不能为空!"),e.abrupt("return",!1);case 6:if(null!=this.value){e.next=9;break}return this.$message.error("请选择文章分类!"),e.abrupt("return",!1);case 9:return t={id:this.editDocumentID,document_title:this.documentTitle,document_context:this.tinymceHtml,document_type_id:this.value,document_self:this.radio,document_url:this.documentUrl,document_del_flag:this.documentDelFlag},console.log("传入后台的参数:",t),e.next=13,i["default"].saveDocument(t);case 13:n=e.sent,n.code<window.MAX_SUCCESS_CODE&&(this.$message.success("".concat(n.message)),this.$emit("editClose"));case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getDocumentById:function(){var e=l(u.a.mark(function e(){var t;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null==this.editDocumentID){e.next=11;break}return e.next=3,i["default"].getDocById(this.editDocumentID);case 3:t=e.sent,console.log("查询到的文章数据",t),this.tinymceHtml=t.document_context,this.documentTitle=t.document_title,this.value=t.document_type_id,this.radio=t.document_self+"",this.documentUrl="1"==this.radio?"":t.document_url,this.documentDelFlag=t.document_del_flag+"";case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),back:function(){this.$emit("editClose")}},created:function(){this.initData(),this.getDocumentById()}},m=d,p=n("2877"),f=Object(p["a"])(m,r,a,!1,null,"65e2f656",null);t["default"]=f.exports},"2c7e":function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),c=n("ceda");function u(e,t,n,r,a,c,u){try{var o=e[c](u),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var c=e.apply(t,n);function o(e){u(c,r,a,o,i,"next",e)}function i(e){u(c,r,a,o,i,"throw",e)}o(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var d=function(){function e(){i(this,e)}return l(e,[{key:"getDocById",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["get"])("/cms/document/getDocById?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"documentList",value:function(){var e=o(a.a.mark(function e(t){var n,r,u,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.count,r=void 0===n?this.uCount:n,u=t.page,o=void 0===u?this.uPage:u,e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/document/documentList?count=".concat(r,"&page=").concat(o),handleError:!0}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"removedocumentList",value:function(){var e=o(a.a.mark(function e(t){var n,r,u,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.count,r=void 0===n?this.uCount:n,u=t.page,o=void 0===u?this.uPage:u,e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/document/removedocumentList?count=".concat(r,"&page=").concat(o),handleError:!0}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"documenetListByName",value:function(){var e=o(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/document/documentList?count=".concat(t,"&page=").concat(n,"&documentName=").concat(r.document_title,"&documentTypeId=").concat(r.document_type_id),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"removedocumenetListByName",value:function(){var e=o(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/document/removedocumentList?count=".concat(t,"&page=").concat(n,"&documentName=").concat(r.document_title,"&documentTypeId=").concat(r.document_type_id),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"handleBackDocument",value:function(){var e=o(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/document/handleBackDocument?id=".concat(t),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveDocument",value:function(){var e=o(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"post",data:t,url:"/cms/document/saveDocument",handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteDocById",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["_delete"])("/cms/document/deleteDocById?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"realDeleteDocById",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["_delete"])("/cms/document/realDeleteDocById?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTypeList",value:function(){var e=o(a.a.mark(function e(t){var n,r,u,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.count,r=void 0===n?this.uCount:n,u=t.page,o=void 0===u?this.uPage:u,e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/documentType/getTypeList?count=".concat(r,"&page=").concat(o),handleError:!0}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTypeById",value:function(){var e=o(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/documentType/getTypeById?id=".concat(t),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveType",value:function(){var e=o(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"post",data:t,url:"/cms/documentType/saveDocumentType",handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteTypeById",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["_delete"])("/cms/documentType/deleteTypeById?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTypeListByName",value:function(){var e=o(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/documentType/getTypeList?count=".concat(t,"&page=").concat(n,"&documentTypeName=").concat(r),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"getDocumentTypeList",value:function(){var e=o(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({method:"get",url:"/cms/documentType/getDocumentTypeList",handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d}}]);