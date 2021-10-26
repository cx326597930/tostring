<template>
  <div class="container" v-if="!showEdit">
    <div class="header">
      <div class="title">文章列表</div>
    </div>
    <!--搜索头部-->
    <el-form :inline="true" :model="documentData" class="demo-form-inline">
      <el-form-item label="文章标题" prop="document_name">
        <el-input v-model="selectName" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="document_type_id">
        <el-select v-model="selectType" placeholder="文章分类">
          <el-option label="全部" value="0" ></el-option>
          <el-option  v-for="(item,index) in types" :key="index" :label="item.type_name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addDocument">创建文章</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <lin-table
      :tableColumn="tableColumn"
      :tableData="tableData"
      :operate="operate"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @row-click="rowClick"
      v-loading="loading"
    ></lin-table>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :background="true"
        :page-size="pageCount"
        :current-page="currentPage"
        v-if="refreshPagination"
        layout="prev, pager, next, jumper"
        :total="total_nums"
      >
      </el-pagination>
    </div>
  </div>
  <!-- 编辑页面(这里做成了一个组件) 定义了一个编辑方法,用来子组件向父组件传递事件的,同时使用了父传子把ID传递到子组件里 -->
  <document-create v-else @editClose="editClose" :editDocumentID="editDocumentID" :mark="mark"></document-create>
</template>

<script>
import LinTable from '@/component/base/table/lin-table'
import document from '@/model/document'
import documentCreate from './document-create'

export default {
  components: {
    LinTable,
    documentCreate
  },
  data() {
    return {
      tableColumn: [
        { prop: 'document_title', label: '文章标题' },
        { prop: 'document_type_name', label: '文章分类' },
        { prop: 'document_open_num', label: '文章浏览数' },
        { prop: 'document_comment', label: '文章评论数' },
        { prop: 'document_col_num', label: '文章收藏数' },
        { prop: 'document_self_name', label: '文章来源' },
        { prop: 'document_status', label: '文章状态' },
      ],
      tableData: [],
      operate: [],
      loading: false,
      pageCount: 10, // 每页10条数据
      currentPage: 1, // 默认获取第一页的数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
      total_nums: 0, // 分组内的用户总数,
      documentData: {
        id: '',
        document_name: '',
      },
      selectName: '',
      showEdit: false, // 用来控制显示文章列表还是显示商品编辑页面
      editDocumentID: null,
      mark: 1,
      selectType: '0', // 分类的默认值设置为0
      types: [],
    }
  },
  methods: {
    async getContext() {
      const currentPage = this.currentPage - 1
      const colorData = await document.documentList({ count: this.pageCount, page: currentPage })
      this.tableData = colorData.records
      this.total_nums = colorData.total
      /* 获取分类下拉框数据 */
      const res = await document.getDocumentTypeList()
      this.types = res
    },
    rowClick() {
    },
    async handleCurrentChange(val) {
      this.currentPage = val
      await this.getContext()
    },
    async onSubmit() {
      let condition = { document_title: this.selectName }
      console.log(condition)
      if (this.selectType !== 'default') {
        condition.document_type_id = this.selectType
      }

      const res = await document.documenetListByName(this.pageCount, 0, condition)
      this.tableData = res.records
      this.total_nums = res.total
      condition = {}
    },
    /* 跳转到创建文章页面 */
    addDocument() {
      this.editDocumentID = null
      this.showEdit = true
    },
    /* 详情按钮事件,显示详情信息,隐藏列表 */
    async handleEdit(val) {
      console.log(val.row.id)
      this.showEdit = true
      this.editDocumentID = val.row.id
    },
    async handleDelete(val) {
      this.$confirm('此操作将删除该文章(可在回收文章列表里重新恢复), 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await document.deleteDocById(val.row.id)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.getContext()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
    },
    /* 编辑关闭事件,隐藏详情,显示列表 */
    editClose() {
      this.showEdit = false
      this.getContext()
    },
  },
  created() {
    this.getContext()
    this.operate = [
      { name: '详情', func: 'handleEdit', type: 'primary' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除文章' }
    ]
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 30px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        height: 59px;
        line-height: 59px;
        color: $parent-title-color;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .pagination {
      display: flex;
      justify-content: flex-end;
      margin: 20px;
    }
  }

  .info {
    margin-left: -55px;
    margin-bottom: -30px;
  }

  .password {
    margin-top: 20px;
    margin-left: -55px;
    margin-bottom: -20px;
  }
</style>
