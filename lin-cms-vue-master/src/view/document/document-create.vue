<template>
  <div class="lin-container">
<!--    <div class="lin-title">文章创建编辑器</div>-->
    <div class="wrap">
      <el-row>
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <div class="lin-wrap">
              <!--文章标题-->
              <el-input style="margin-bottom: 20px" placeholder="请输入文章标题内容" v-model="documentTitle"></el-input>
              <!--文章富文本-->
              <tinymce style="margin-bottom: 20px" :defaultContent="tinymceHtml" @change="change" upload_url="http://dev.lin.colorful3.com/cms/file/" />
              <!--文章分类选择-->
              <el-form-item label="文章状态:"  style="margin-bottom: 20px">
                <el-select   size="medium"  v-model="value" placeholder="选择文章分类">
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.type_name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <!--文章状态-->
              <el-form-item label="文章状态:"  style="margin-bottom: 20px">
                  <el-radio v-model="documentDelFlag" label=0 border size="medium">正常</el-radio>
                  <el-radio v-model="documentDelFlag" label=1 border size="medium">不展示</el-radio>
              </el-form-item>
              <!--文章是否原创-->
              <el-form-item label="文章来源:"  style="margin-bottom: 20px">
                <el-radio v-model="radio" label=1 border size="medium">原创</el-radio>
                <el-radio v-model="radio" label=2 border size="medium">转载</el-radio>
              </el-form-item>
              <!--转载地址-->
              <el-form-item label="转载地址:" v-if="radio==2"  style="margin-bottom: 20px">
                <el-input placeholder="请输入原文链接" size="medium"  v-model="documentUrl">
                  <template slot="prepend">Http://</template>
                </el-input>
              </el-form-item>
            </div>
            <el-form-item class="submit">
              <el-button type="primary" @click="save">保 存</el-button>
              <el-button v-if="mark" @click="back" class="iconfont icon-fanhui">返 回</el-button>
            </el-form-item>
          </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tinymce from '@/component/base/tinymce'
import document from '@/model/document'

  export default {
    props: {
      editDocumentID: {
        type: Number,
      },
      mark: {
        type: Number,
      },
    },
    data() {
      return {
        text: 'this is default content',
        form: {
          context:''
        },
        loading: false,
        tinymceHtml: '',
        documentTitle: '',
        options:[
          {type_name:'走进创造',id:1},
          {type_name:'现代真理',id:2},
          {type_name:'健康饮食',id:3},
        ],
        key:null,
        label:null,
        value:null,
        radio:"1",
        documentUrl:null,
        documentDelFlag:"0"
      }
    },
    components: {
      Tinymce
    },
    methods: {
      /*初始化数据*/
      async initData(){
        const typeList = await document.getDocumentTypeList();
        this.options = typeList;
      },
      /*内容改变时自动调用*/
      change(val) {
        console.log(val)
        this.tinymceHtml = val;
      },
      /*保存文章内容*/
      async save(){
        if(this.documentTitle.trim()==""){
          this.$message.error('文章标题不能为空!');
          return false;
        }
        if(this.tinymceHtml.trim()==""){
          this.$message.error('文章内容不能为空!');
          return false;
        }
        if(this.value==null){
          this.$message.error('请选择文章分类!');
          return false;
        }

        let documentData={
          id:this.editDocumentID,
          document_title:this.documentTitle,
          document_context:this.tinymceHtml,
          document_type_id:this.value,
          document_self:this.radio,
          document_url:this.documentUrl,
          document_del_flag:this.documentDelFlag
        }
        console.log("传入后台的参数:",documentData)
        const res = await document.saveDocument(documentData);
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.$message.success(`${res.message}`)
          this.$emit('editClose')
        }
      },
      /*根据文章ID查询文章内容*/
      async getDocumentById(){
        if(this.editDocumentID!=null){
          const res = await document.getDocById(this.editDocumentID);
          console.log("查询到的文章数据",res);
          this.tinymceHtml = res.document_context;
          this.documentTitle = res.document_title;
          this.value = res.document_type_id;
          this.radio = res.document_self+"";
          this.documentUrl = this.radio=="1"?'':res.document_url;
          this.documentDelFlag = res.document_del_flag+"";
        }
      },
      /*返回文章列表*/
      back() {
        this.$emit('editClose')
      },
    },
    created() {
      this.initData();
      this.getDocumentById();
    },
  }
</script>

<style scoped lang="scss"></style>
