<template>
  <div class="container" v-if="!showEdit">
    <div class="header">
    <div class="title">商品列表</div>
    </div>
    <!--搜索头部-->
    <el-form :inline="true" :model="goodsInfo" class="demo-form-inline">
      <el-form-item label="商品名称" prop="goods_name">
        <el-input v-model="goodsInfo.goods_name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌" prop="goods_brand">
        <el-select v-model="selectBrand" placeholder="商品品牌">
            <el-option label="全部" value="0" ></el-option>
            <el-option  v-for="(item,index) in brands" :key="index" :label="item.brand_name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 商品列表(这里做成了一个组件) -->
    <lin-table
      :tableColumn="tableColumn"
      :tableData="tableData"
      :operate="operate"
      v-loading="loading"
      @goToGroupEditPage="goToGroupEditPage"
      @handleDelete="handleDelete"
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
  <goods-modify v-else @editClose="editClose" :editGoodsID="editGoodsID"></goods-modify>

</template>

<script>
import goods from '@/model/goods'
import LinTable from '@/component/base/table/lin-table'
import goodsModify from './goods-detail'

export default {
  components: {
    LinTable,
    goodsModify
  },
  data() {
    return {
      tableColumn: [
        { prop: 'goods_main_pic_url', label: '商品主图' },
        { prop: 'goods_name', label: '商品名称' },
        { prop: 'goods_brand_name', label: '品牌' },
        { prop: 'goods_detail', label: '商品描述' }],
      tableData: [],
      operate: [],
      showEdit: false, // 用来控制显示商品列表还是显示商品编辑页面
      editGoodsID: 1, // 商品的ID,当点击详情时通过父传子把这个ID带过去,查询出商品的信息
      goodsInfo: {
        goods_name: '',
        goods_brand: ''
      },
      brands: [],
      selectBrand: '0', // 品牌的默认值设置为0
      total_nums: 0, // 分组内的用户总数
      currentPage: 1, // 默认获取第一页的数据
      pageCount: 10, // 每页10条数据
      refreshPagination: true, // 页数增加的时候，因为缓存的缘故，需要刷新Pagination组件
    }
  },
  created() {
    this.loading = true
    this.getGoods()
    this.operate = [
      { name: '详情', func: 'goToGroupEditPage', type: 'primary' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除商品' }
    ]
    this.loading = false
  },
  methods: {
    /* 这个方法在很多地方都有调用,初始化加载数据的时候获取了商品的列表和品牌下拉框的基础数据,以及每个操作之后都会重新调用一次该方法,用于刷新数据 */
    async getGoods() {
      try {
        const currentPage = this.currentPage - 1
        const goodsData = await goods.goodsList({ count: this.pageCount, page: currentPage })
        this.tableData = goodsData.records
        this.total_nums = goodsData.total
        const brands = await goods.getBrands()
        this.brands = brands
      } catch (error) {
        if (error.code === 10020) {
          this.tableData = []
        }
      }
    },
    // 切换table页
    async handleCurrentChange(val) {
      this.currentPage = val
      // this.loading = true
      // debugger
      await this.getGoods()
      // this.loading = false
    },
    /* 详情按钮事件,显示详情信息,隐藏列表 */
    goToGroupEditPage(val) {
      console.log(val.row.id)
      this.showEdit = true
      this.editGoodsID = val.row.id
    },
    /* 编辑关闭事件,隐藏详情,显示列表 */
    editClose() {
      this.showEdit = false
      this.getGoods()
      this.selectBrand = '0'
    },
    /* 删除商品事件 */
    handleDelete(val) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await goods.deleteGoods(val.row.id)
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.getGoods()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
    },
    /* 搜索部分提交查询按钮事件 */
    async onSubmit() {
      let condition = { goodsName: this.goodsInfo.goods_name }
      if (this.selectBrand !== 'default') {
        condition.goodsBrands = this.selectBrand
      }
      const result = await goods.getGoodsByCondition(condition)
      this.tableData = result.records
      condition = {}
    },
    /* 重置查询条件事件 */
    rest(formName) {
      this.$refs[formName].resetFields()
    },
    rowClick() {}
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
</style>
