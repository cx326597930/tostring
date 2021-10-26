<template>
    <div class="container">
      <div class="header">
        <div class="title">品牌列表</div>
      </div>
      <!--搜索头部-->
      <el-form :inline="true" :model="brandData" class="demo-form-inline">
        <el-form-item label="品牌名称" prop="goods_name">
          <el-input v-model="selectName" placeholder="品牌名称"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="addBrand">新增品牌</el-button>
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
        title="新增品牌"
        :visible.sync="dialogVisible"
        width="30%">
        <el-row>
          <el-col :lg="16" :md="20" :sm="24" :xs="24">
            <el-form status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
              <el-form-item label="品牌名称" prop="brand_name">
                <el-input v-model="brandData.brand_name" size="medium"  placeholder="请填写品牌名称"></el-input>
              </el-form-item>
              <el-form-item label="品牌产地" prop="brand_local">
                <el-input v-model="brandData.brand_local" size="medium"  placeholder="请填写品牌产地"></el-input>
              </el-form-item>
              <el-form-item label="商品英文名" prop="brand_en">
                <el-input v-model="brandData.brand_en" size="medium"  placeholder="请填写品牌英文名"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveBrand">保 存</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>
import LinTable from '@/component/base/table/lin-table'
import brand from '@/model/brand'

export default {
  components: { LinTable },
  data() {
    return {
      tableColumn: [
        { prop: 'brand_name', label: '品牌名称' },
        { prop: 'brand_local', label: '品牌产地' },
        { prop: 'brand_en', label: '品牌英文名' }],
      tableData: [],
      operate: [],
      loading: false,
      pageCount: 10, // 每页10条数据
      currentPage: 1, // 默认获取第一页的数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
      total_nums: 0, // 分组内的用户总数,
      brandData: {
        id: '',
        brand_name: '',
        brand_local: '',
        brand_en: ''
      },
      selectName: '',
      dialogVisible: false // 弹窗默认关闭
    }
  },
  methods: {
    async getBrands() {
      const currentPage = this.currentPage - 1
      const brandData = await brand.brandList({ count: this.pageCount, page: currentPage })
      this.tableData = brandData.records
      this.total_nums = brandData.total
    },
    async handleEdit(val) {
      console.log(val.row.id)
      const result = await brand.getBrandById(val.row.id)
      this.brandData = result
      this.dialogVisible = true
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await brand.deleteBrand(val.row.id)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.getBrands()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
    },
    rowClick() {
    },
    async handleCurrentChange(val) {
      this.currentPage = val
      await this.getBrands()
    },
    async onSubmit() {
      const res = await brand.brandListByName(this.pageCount, 0, this.selectName)
      this.tableData = res.records
      this.total_nums = res.total
    },
    addBrand() {
      this.dialogVisible = true
      this.brandData.brand_name = ''
      this.brandData.brand_local = ''
      this.brandData.brand_en = ''
      this.brandData.id = ''
    },
    async saveBrand() {
      await brand.saveBrand(this.brandData)
      this.$message.success('保存成功')
      this.dialogVisible = false
      this.getBrands()
    }
  },
  created() {
    this.getBrands()
    this.operate = [
      { name: '详情', func: 'handleEdit', type: 'primary' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除品牌' }
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
