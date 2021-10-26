<template>
    <div class="container">
      <div class="header">
        <div class="title">规格组列表</div>
      </div>
      <!--搜索头部-->
      <el-form :inline="true" :model="specsGroupData" class="demo-form-inline">
        <el-form-item label="规格组名称" prop="specs_group_name">
          <el-input v-model="selectName" placeholder="规格组名称"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="addSpecsGroup">新增规格组</el-button>
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

      <!--弹窗-->
      <el-dialog
        title="新增颜色"
        :visible.sync="dialogVisible"
        width="30%">
        <el-row>
          <el-col :lg="16" :md="20" :sm="24" :xs="24">
            <el-form status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
              <el-form-item label="规格组名称" prop="specs_group_name">
                <el-input v-model="specsGroupData.specs_group_name" size="medium"  placeholder="请填写规格组名称"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSpecsGroup">保 存</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>

import LinTable from '@/component/base/table/lin-table'
import specsGroup from '@/model/specsGroup'

export default {
  components: { LinTable },
  data() {
    return {
      tableColumn: [
        { prop: 'specs_group_name', label: '规格组名称' },
        { prop: 'used', label: '使用状态' },
      ],
      tableData: [],
      operate: [],
      loading: false,
      pageCount: 10, // 每页10条数据
      currentPage: 1, // 默认获取第一页的数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
      total_nums: 0, // 分组内的用户总数,
      specsGroupData: {
        specs_group_name: '',
        id: ''
      },
      selectName: '',
      dialogVisible: false // 弹窗默认关闭
    }
  },
  methods: {
    async getSpecsGroup() {
      const currentPage = this.currentPage - 1
      const specsGroupData = await specsGroup.specsGroupList({ count: this.pageCount, page: currentPage })
      console.log(specsGroupData.code)
      this.tableData = specsGroupData.records
      this.total_nums = specsGroupData.total
    },
    async onSubmit() {
      const res = await specsGroup.specsGroupListByName(this.pageCount, 0, this.selectName)
      this.tableData = res.records
      this.total_nums = res.total
    },
    addSpecsGroup() {
      this.dialogVisible = true
      this.specsGroupData.specs_group_name = ''
      this.specsGroupData.id = ''
    },
    handleDelete() {},
    async handleEdit(val) {
      console.log(val)
      const result = await specsGroup.getspecsGroupById(val.row.id)
      this.specsGroupData = result
      this.dialogVisible = true
    },
    rowClick() {},
    async saveSpecsGroup() {
      await specsGroup.saveSpecsGroup(this.specsGroupData)
      this.$message.success('保存成功')
      this.dialogVisible = false
      this.getSpecsGroup()
    }
  },
  created() {
    this.getSpecsGroup()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除规格组' }
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
