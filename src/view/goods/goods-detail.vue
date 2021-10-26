<template>
  <div class="container">
    <div class="title">
      <span>商品详情</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
    </div>
    <!--横线-->
    <el-divider></el-divider>
    <!--主体内容-->
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="商品名称" prop="goods_name">
              <el-input size="medium" v-model="form.goods_name" placeholder="请填写书名"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="">
              <el-image :src="form.goods_main_pic_url"></el-image>
            </el-form-item>
            <el-form-item label="商品品牌" prop="goods_brand">
              <el-select v-model="form.goods_brand" placeholder="商品品牌">
                <el-option label="全部" value="0" ></el-option>
                <el-option  v-for="(item,index) in brands" :key="index" :label="item.brand_name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品规格组" prop="goods_group_id">
              <el-select v-model="form.goods_group_id" placeholder="商品规格组" @change="getSpecs">
                <el-option  v-for="(item,index) in groups" :key="index" :label="item.specs_group_name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品规格"  v-if="specs.length>0">
              <div v-for="(item,index) in specs" :key="index">
                <el-input  v-model="item.specs_key" placeholder="规格名" style="width:15%;margin-right:2%"></el-input>
                <el-input  v-model="item.specs_value" placeholder="规格值" style="width:15%;margin-right:2%;margin-top: 2%"></el-input>
                <el-input  v-model="item.color_name" placeholder="规格颜色" style="width:15%;margin-right:2%;margin-top: 2%"></el-input>
                <el-input type="number" v-model="item.trade_price" placeholder="批发价" style="width:15%;margin-right:2%;margin-top: 2%"></el-input>
                <el-input type="number" v-model="item.retail_price" placeholder="零售价" style="width:15%;margin-right:2%;margin-top: 2%"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="商品描述" prop="goods_detail">
              <el-input size="medium" type="textarea" :rows="4" placeholder="请输入简介" v-model="form.goods_detail">
              </el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="rest('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</div>
</template>

<script>
import goods from '@/model/goods'

export default {
  props: {
    editGoodsID: {
      type: Number,
    },
  },
  data() {
    return {
      loading: false,
      form: {
        id: '',
        goods_name: '',
        goods_main_pic_url: '',
        goods_detail: '',
        goods_brand: '',
        goods_group_id: ''
      },
      brands: [],
      groups: [],
      specs: []
    }
  },
  methods: {
    back() {
      this.$emit('editClose')
    },
    async submitForm() {
      this.form.list = this.specs
      console.log(this.form)
      const res = await goods.editGoods(this.editGoodsID, this.form)
      if (res.code < window.MAX_SUCCESS_CODE) {
        this.$message.success(`${res.message}`)
        this.$emit('editClose')
      }
    },
    rest(formName) {
      this.$refs[formName].resetFields()
      this.specs = []
    },
    async getBrandsList() {
      this.brands = await goods.getBrandsList()
    },
    async getSpecsGroup() {
      this.groups = await goods.getSpecsGroup()
    },
    async getSpecsByIdAndGoodsId() {
      this.specs = await goods.getSpecsByIdAndGoodsId(this.form.goods_group_id, this.form.id)
    },
    async getSpecs(val) {
      this.specs = await goods.getSpecs(val)
    }
  },
  async mounted() {
    this.loading = true
    this.form = await goods.getGoods(this.editGoodsID)
    this.loading = false
    this.brands = await goods.getBrandsList()
    this.getSpecsGroup()
    this.getSpecsByIdAndGoodsId()
    console.log(this.form)
  }
}
</script>

<style lang="scss" scoped>
  .el-divider--horizontal {
    margin: 0;
  }

  .container {
    .title {
      height: 59px;
      line-height: 59px;
      color: $parent-title-color;
      font-size: 16px;
      font-weight: 500;
      text-indent: 40px;

      .back {
        float: right;
        margin-right: 40px;
        cursor: pointer;
      }
    }

    .wrap {
      padding: 20px;
    }

    .submit {
      float: left;
    }
  }
</style>
