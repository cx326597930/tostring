<template>
  <div class="container">
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
</template>

<script>
/* eslint-disable */
import LinTable from '@/component/base/table/lin-table'
import document from '@/model/document'

  export default {
    components: {
      LinTable
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
        mark: 1,
        selectType: '0', // 分类的默认值设置为0
        types: [],
      }
    },
    methods: {
      async getContext() {
        const currentPage = this.currentPage - 1
        const colorData = await document.removedocumentList({ count: this.pageCount, page: currentPage })
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

        const res = await document.removedocumenetListByName(this.pageCount, 0, condition)
        this.tableData = res.records
        this.total_nums = res.total
        condition = {}
      },

      /* 详情按钮事件,显示详情信息,隐藏列表 */
      async handleEdit(val) {
        this.$confirm('此操作将还原该文章(下架状态), 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          const res = await document.handleBackDocument(val.row.id)
          if (res.code < window.MAX_SUCCESS_CODE) {
            this.getContext()
            this.$message({
              type: 'success',
              message: `${res.message}`,
            })
          }
        })
      },
      async handleDelete(val) {
        this.$confirm('此操作将彻底删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          const res = await document.realDeleteDocById(val.row.id)
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
        { name: '还原文章', func: 'handleEdit', type: 'primary' },
        { name: '彻底删除', func: 'handleDelete', type: 'danger', permission: '彻底删除' }
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
