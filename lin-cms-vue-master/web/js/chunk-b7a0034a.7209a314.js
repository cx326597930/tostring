(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7a0034a","chunk-6963d938","chunk-2d2167e5"],{"019b":function(e,t,n){"use strict";var a=n("7797"),r=n.n(a);r.a},"158d":function(e,t,n){"use strict";var a=n("2866"),r=n.n(a);r.a},2866:function(e,t,n){},"6a5a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.colorData}},[n("el-form-item",{attrs:{label:"颜色名称",prop:"goods_name"}},[n("el-input",{attrs:{placeholder:"颜色名称"},model:{value:e.selectName,callback:function(t){e.selectName=t},expression:"selectName"}})],1),n("el-form-item",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),n("el-button",{attrs:{type:"primary"},on:{click:e.addColor}},[e._v("新增颜色")])],1)],1),n("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate},on:{handleEdit:e.handleEdit,handleDelete:e.handleDelete,"row-click":e.rowClick}}),n("div",{staticClass:"pagination"},[e.refreshPagination?n("el-pagination",{attrs:{background:!0,"page-size":e.pageCount,"current-page":e.currentPage,layout:"prev, pager, next, jumper",total:e.total_nums},on:{"current-change":e.handleCurrentChange}}):e._e()],1),n("el-dialog",{attrs:{title:"新增颜色",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-row",[n("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"颜色名称",prop:"color_name"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写颜色名称"},model:{value:e.colorData.color_name,callback:function(t){e.$set(e.colorData,"color_name",t)},expression:"colorData.color_name"}})],1),n("el-form-item",{attrs:{label:"颜色编码",prop:"color_code"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写颜色编码"},model:{value:e.colorData.color_code,callback:function(t){e.$set(e.colorData,"color_code",t)},expression:"colorData.color_code"}})],1)],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.saveColor}},[e._v("保 存")])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("颜色列表")])])}],i=n("a34a"),o=n.n(i),l=n("de53"),c=n("c365");function s(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,l,"next",e)}function l(e){s(i,a,r,o,l,"throw",e)}o(void 0)})}}var d={components:{LinTable:l["default"]},data:function(){return{tableColumn:[{prop:"color_name",label:"颜色名称"},{prop:"color_code",label:"颜色编号"}],tableData:[],operate:[],loading:!1,pageCount:10,currentPage:1,refreshPagination:!0,total_nums:0,colorData:{id:"",color_name:"",color_code:""},selectName:"",dialogVisible:!1}},methods:{getColor:function(){var e=u(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentPage-1,e.next=3,c["default"].colorList({count:this.pageCount,page:t});case 3:n=e.sent,this.tableData=n.records,this.total_nums=n.total;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(){var e=u(o.a.mark(function e(t){var n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["default"].getColorById(t.row.id);case 2:n=e.sent,this.colorData=n,this.dialogVisible=!0;case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该颜色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(u(o.a.mark(function n(){var a;return o.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["default"].deleteColor(e.row.id);case 2:a=n.sent,a.code<window.MAX_SUCCESS_CODE&&(t.getColor(),t.$message({type:"success",message:"".concat(a.message)}));case 4:case"end":return n.stop()}},n)})))},rowClick:function(){},handleCurrentChange:function(){var e=u(o.a.mark(function e(t){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.currentPage=t,e.next=3,this.getColor();case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onSubmit:function(){var e=u(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["default"].colorListByName(this.pageCount,0,this.selectName);case 2:t=e.sent,this.tableData=t.records,this.total_nums=t.total;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addColor:function(){this.dialogVisible=!0,this.colorData.color_name="",this.colorData.color_code="",this.colorData.id=""},saveColor:function(){var e=u(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["default"].saveColor(this.colorData);case 2:this.$message.success("保存成功"),this.dialogVisible=!1,this.getColor();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getColor(),this.operate=[{name:"详情",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",permission:"删除颜色"}]}},f=d,h=(n("158d"),n("2877")),p=Object(h["a"])(f,a,r,!1,null,"0117fa0a",null);t["default"]=p.exports},7797:function(e,t,n){},b3b8:function(e,t,n){"use strict";var a=n("f378"),r=n.n(a);r.a},c365:function(e,t,n){"use strict";n.r(t);var a=n("a34a"),r=n.n(a),i=n("ceda");function o(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function l(e){o(i,a,r,l,c,"next",e)}function c(e){o(i,a,r,l,c,"throw",e)}l(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var d=function(){function e(){c(this,e)}return u(e,[{key:"getColor",value:function(){var e=l(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("/cms/color/getColoId?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"colorList",value:function(){var e=l(r.a.mark(function e(t){var n,a,o,l;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.count,a=void 0===n?this.uCount:n,o=t.page,l=void 0===o?this.uPage:o,e.abrupt("return",Object(i["default"])({method:"get",url:"/cms/color/colorList?count=".concat(a,"&page=").concat(l),handleError:!0}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"colorListByName",value:function(){var e=l(r.a.mark(function e(t,n,a){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["default"])({method:"get",url:"/cms/color/colorList?count=".concat(t,"&page=").concat(n,"&colorName=").concat(a),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"saveColor",value:function(){var e=l(r.a.mark(function e(t){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["default"])({method:"post",data:t,url:"/cms/color/saveColor",handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteColor",value:function(){var e=l(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("/cms/color/deleteColor?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getColorById",value:function(){var e=l(r.a.mark(function e(t){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["default"])({method:"get",url:"/cms/color/getColorById?id=".concat(t),handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getColorList",value:function(){var e=l(r.a.mark(function e(){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["default"])({method:"get",url:"/cms/color/getColorList",handleError:!0}));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d},de53:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lin-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"linTable",attrs:{stripe:"","row-key":"id",border:e.border,data:e.currentData,"highlight-current-row":!!e.highlightCurrentRow,"element-loading-text":e.loadingText,"element-loading-spinner":e.loadingIcon,"element-loading-background":e.loadingBG,"row-class-name":e.rowClassName},on:{"current-change":e.handleCurrentChange,"selection-change":e.handleSelectionChange,"select-all":e.selectAll,"row-click":e.rowClick}},[e.type?n("el-table-column",{attrs:{type:e.type,width:"55"}}):e._e(),e.index?n("el-table-column",{attrs:{type:e.index,index:e.currentIndex,width:"55"}}):e._e(),e._l(e.filterTableColumn,function(e){return n("el-table-column",{key:e.id,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":!0,filters:e.filters?e.filters:null,"filter-method":e.filterMethod?e.filterMethod:null,"column-key":e.filterMethod?e.prop:null,formatter:e.formatter?e.formatter:null,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,width:e.width?e.width:""}})}),e.operate.length>0?n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"275"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.operate,function(a,r){return n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:a.permission?a.permission:"",type:"disabled"},expression:"{ permission: item.permission ? item.permission : '', type: 'disabled' }"}],key:r,attrs:{type:a.type,plain:"",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.buttonMethods(a.func,t.$index,t.row)}}},[e._v(e._s(a.name))])})}}],null,!1,2525776182)}):e._e()],2),e.pagination?n("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.pagination.pageSize?e.pagination.pageSize:10,total:e.pagination.pageTotal?e.pagination.pageTotal:null,"current-page":e.pagination.currentPage?e.pagination.currentPage:1},on:{"current-change":e.currentChange}}):e._e()],1)},r=[];function i(e){return c(e)||l(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var s={props:{tableColumn:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},operate:{type:Array,default:function(){return[]}},customColumn:{type:Array,default:function(){return[]}},fixedLeftList:{type:Array,default:function(){return[]}},fixedRightList:{type:Array,default:function(){return[]}},type:{type:String,default:null},index:{index:String,default:""},highlightCurrentRow:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:""},loadingIcon:{type:String,default:"el-icon-loading"},loadingBG:{type:String,default:"rgba(255,255,255,0.5)"},pagination:{type:[Object,Boolean],default:!1},border:{type:Boolean,default:!1}},data:function(){return{filterTableColumn:[],currentPage:1,currentData:[],selectedTableData:[],currentRow:null,oldVal:[],oldKey:[],currentIndex:1,rowClassName:""}},created:function(){},beforeMount:function(){sessionStorage.setItem("selectedTableData",JSON.stringify([]))},methods:{buttonMethods:function(e,t,n){var a=this,r=this.$options.methods;r[e](a,t,n)},handleEdit:function(e,t,n){e.$emit("handleEdit",{index:t,row:n})},handleDelete:function(e,t,n){e.$emit("handleDelete",{index:t,row:n})},goToGroupEditPage:function(e,t,n){e.$emit("goToGroupEditPage",{index:t,row:n})},toggleSelection:function(e,t){var n=this;e?e.forEach(function(e){n.$refs.linTable.toggleRowSelection(e,t)}):this.$refs.linTable.clearSelection()},selectAll:function(e){this.oldKey=e.map(function(e){return e.key})},handleCurrentChange:function(e,t){this.currentRow=e,this.$emit("handleCurrentChange",{val:e,oldVal:t})},rowClick:function(e){if(this.oldKey.includes(e.key)){this.oldKey=this.oldKey.filter(function(t){return t!==e.key});var t=this.oldVal.filter(function(t){return t.key!==e.key});this.handleSelectionChange(t),this.toggleSelection(this.currentData.filter(function(t){return t.key===e.key}),!1)}else{this.oldKey.push(e.key);var n=this.oldVal.concat(e);this.handleSelectionChange(n),this.toggleSelection(this.currentData.filter(function(t){return t.key===e.key}))}if(this.currentOldRow&&this.currentOldRow.key===e.key)return this.$refs.linTable.setCurrentRow(),void(this.currentOldRow=null);this.currentOldRow=e},currentChange:function(e){var t=this,n=[];this.oldVal=[],this.currentPage=e,this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),this.currentData=this.tableData.filter(function(e,n){return n>=(t.currentPage-1)*t.pagination.pageSize&&n<t.currentPage*t.pagination.pageSize}),this.$emit("currentChange",e),this.selectedTableData.forEach(function(e){for(var a=0;a<t.currentData.length;a++)t.currentData[a].key===e.key&&(t.oldVal.push(t.currentData[a]),n.push(t.currentData[a]))}),this.$nextTick(function(){t.toggleSelection(n)}),this.currentIndex=(this.currentPage-1)*this.pagination.pageSize+1},handleSelectionChange:function(e){var t=e.map(function(e){return e.key}),n=this.oldVal.map(function(e){return e.key});if(this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),0===this.selectedTableData.length)return this.selectedTableData=this.selectedTableData.concat(e),this.$emit("selection-change",this.selectedTableData),this.oldVal=i(e),void sessionStorage.setItem("selectedTableData",JSON.stringify(this.selectedTableData));if(t.length<n.length){var a=n.filter(function(e){return!t.includes(e)});this.selectedTableData=this.selectedTableData.filter(function(e){return!a.includes(e.key)}),this.$emit("selection-change",this.selectedTableData)}else{var r=t.filter(function(e){return!n.includes(e)}),o=e.filter(function(e){return r.includes(e.key)});this.selectedTableData=this.selectedTableData.concat(o),this.$emit("selection-change",this.selectedTableData)}sessionStorage.setItem("selectedTableData",JSON.stringify(this.selectedTableData)),this.oldVal=i(e)}},watch:{fixedLeftList:{handler:function(){var e=this;this.filterTableColumn.map(function(t,n){return e.fixedLeftList.indexOf(t.label)>-1?e.$set(e.filterTableColumn[n],"fixed","left"):-1===e.fixedRightList.indexOf(t.label)&&e.$set(e.filterTableColumn[n],"fixed",!1),""})},deep:!0,immediate:!0},fixedRightList:{handler:function(){var e=this;this.filterTableColumn.map(function(t,n){return e.fixedRightList.indexOf(t.label)>-1?e.$set(e.filterTableColumn[n],"fixed","right"):-1===e.fixedLeftList.indexOf(t.label)&&e.$set(e.filterTableColumn[n],"fixed",!1),""})},deep:!0,immediate:!0},customColumn:{handler:function(e){e.length>1&&(this.filterTableColumn=this.tableColumn.filter(function(t){return e.indexOf(t.label)>-1}))},deep:!0},tableData:{handler:function(){var e=this;this.pagination&&this.pagination.pageSize?this.currentData=this.tableData.filter(function(t,n){return n<e.pagination.pageSize}):this.currentData=this.tableData},deep:!0,immediate:!0},tableColumn:{handler:function(){var e=this;this.customColumn.length>1?this.filterTableColumn=this.tableColumn.filter(function(t){return e.customColumn.indexOf(t.label)>-1}):this.filterTableColumn=this.tableColumn},deep:!0,immediate:!0}}},u=s,d=(n("019b"),n("b3b8"),n("2877")),f=Object(d["a"])(u,a,r,!1,null,"141bdb2f",null);t["default"]=f.exports},f378:function(e,t,n){}}]);