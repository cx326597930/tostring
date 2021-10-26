<template>
  <div class="container" v-if="showEdit">
    <div class="header">
      <div class="title">规格列表</div>
    </div>
    <!--搜索头部-->
    <el-form :inline="true" :model="specsData" class="demo-form-inline">
      <el-form-item label="规格名称" prop="goods_name">
        <el-input v-model="selectName" placeholder="规格组名称"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addSpecs">新增规格</el-button>
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
  <specs-create v-else @editClose="editClose"></specs-create>
</template>

<script>
import LinTable from '@/component/base/table/lin-table'
import specsCreate from './specs-create'
import specs from '@/model/specs'

export default {
  components: {
    LinTable,
    specsCreate
  },
  data() {
    return {
      showEdit: true,
      tableColumn: [
        { prop: 'specs_group_name', label: '规格组名' },
        { prop: 'specs_key', label: '规格名' },
        { prop: 'specs_value', label: '规格值' },
        { prop: 'specs_value', label: '规格值' },
        { prop: 'color_name', label: '颜色名' },
      ],
      tableData: [],
      operate: [],
      specsData: {
        id: '',
        specs_key: '',
        specs_value: '',
        specs_group_id: '',
        color_id: ''
      },
      selectName: '',
      loading: false,
      pageCount: 10, // 每页10条数据
      currentPage: 1, // 默认获取第一页的数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
      total_nums: 0 // 分组内的用户总数,
    }
  },
  methods: {
    async getSpecs() {
      const currentPage = this.currentPage - 1
      const colorData = await specs.specsList({ count: this.pageCount, page: currentPage })
      this.tableData = colorData.records
      this.total_nums = colorData.total
    },
    async onSubmit() {
      const res = await specs.specsListByName(this.pageCount, 0, this.selectName)
      this.tableData = res.records
      this.total_nums = res.total
    },
    addSpecs() {
      this.showEdit = false
    },
    handleEdit() {
    },
    rowClick() {
    },
    async handleCurrentChange(val) {
      this.currentPage = val
      await this.getSpecs()
    },
    handleDelete() {
    },
    editClose() {
      this.showEdit = true
    },
    // eslint-disable-next-line no-unused-vars
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        console.log(row)
        return {
          rowspan: 0,
          colspan: 1
        }
      }
    }
  },
  created() {
    this.getSpecs()
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
