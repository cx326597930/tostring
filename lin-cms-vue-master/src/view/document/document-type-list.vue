
<template>
  <div class="container">
    <div class="header">
      <div class="title">文章分类列表</div>
    </div>
    <!--搜索头部-->
    <el-form :inline="true" :model="documentTypeData" class="demo-form-inline">
      <el-form-item label="分类名称" prop="goods_name">
        <el-input v-model="selectName" placeholder="分类名称"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addType">新增分类</el-button>
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
    <!--弹窗-->
    <el-dialog
      title="新增文章分类"
      :visible.sync="dialogVisible"
      width="30%">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="分类名称" prop="type_name">
              <el-input v-model="documentTypeData.type_name" size="medium"  placeholder="请填写分类名称"></el-input>
            </el-form-item>
            <el-form-item label="分类编码" prop="type_code">
              <el-input v-model="documentTypeData.type_code" size="medium"  placeholder="请填写分类编码"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveType">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LinTable from '@/component/base/table/lin-table'
import document from '@/model/document'
/* eslint-disable */
export default {
  components: {
    LinTable
  },
  data() {
    return {
      tableColumn: [
        { prop: 'type_name', label: '分类名称' },
        { prop: 'type_code', label: '分类编号' },
      ],
      tableData: [],
      operate: [],
      loading: false,
      pageCount: 10, // 每页10条数据
      currentPage: 1, // 默认获取第一页的数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
      total_nums: 0, // 分组内的用户总数,
      documentTypeData:{
        type_name:'',
        type_code:''
      },
      selectName: '',
      dialogVisible: false // 弹窗默认关闭
    }
  },
  methods: {
    async getType() {
      const currentPage = this.currentPage - 1
      const typeData = await document.getTypeList({ count: this.pageCount, page: currentPage })
      this.tableData = typeData.records
      this.total_nums = typeData.total
    },
    async handleEdit(val) {

      const result = await document.getTypeById(val.row.id)
      this.documentTypeData = result
      this.dialogVisible = true
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该类别, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await document.deleteTypeById(val.row.id)
        console.log('res',res)
        if (res.code == 200) {
          this.getType()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }else{
          this.$message({
            type: 'warning',
            message: `${res.message}`,
          })
        }
      })
    },
    rowClick() {
    },
    async handleCurrentChange(val) {
      this.currentPage = val
      await this.getType()
    },
    async onSubmit() {
      const res = await document.getTypeListByName(this.pageCount, 0, this.selectName)
      this.tableData = res.records
      this.total_nums = res.total
    },
    addType() {
      this.dialogVisible = true
      this.documentTypeData.type_name = ''
      this.documentTypeData.type_code = ''
      this.documentTypeData.id = ''
    },
    async saveType() {
      if(this.documentTypeData.type_name.trim()==""){
        this.$message.error('分类名称不能为空!');
        return false;
      }
      if(this.documentTypeData.type_code.trim()==""){
        this.$message.error('分类编码不能为空!');
        return false;
      }

      await document.saveType(this.documentTypeData)
      this.$message.success('保存成功')
      this.dialogVisible = false
      this.getType()
    }
  },
  created() {
    this.getType()
    this.operate = [
      { name: '详情', func: 'handleEdit', type: 'primary' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除分类' }
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
