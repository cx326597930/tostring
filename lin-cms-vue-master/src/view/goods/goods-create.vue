<template>
  <div class="container">
    <div class="title">
    <span>新建商品</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
    </div>
    <el-divider></el-divider>
    <!--主体内容-->
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="商品名称" prop="goods_name">
              <el-input size="medium" v-model="form.goods_name" style="width:30%;" placeholder="请填写商品名称"></el-input>
            </el-form-item>
            <!--<el-form-item label="商品图片" prop="">
              <el-image :src="form.goods_main_pic_url"></el-image>
            </el-form-item>-->
            <el-form-item label="商品品牌" prop="goods_brand">
              <el-select v-model="selectBrand" placeholder="商品品牌">
                <el-option label="全部" value="0" ></el-option>
                <el-option  v-for="(item,index) in brands" :key="index" :label="item.brand_name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品规格组" prop="specs_group_name">
              <el-select v-model="specs_group_name" placeholder="商品规格组" @change="getSpecs">
                <el-option  v-for="(item,index) in groups" :key="index" :label="item.specs_group_name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="商品规格" prop="goods_name" v-if="specs.length>0">
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
              <el-button type="primary" @click="save">保 存</el-button>
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
  data() {
    return {
      loading: false,
      form: {
        goods_name: '',
        goods_main_pic_url: '',
        goods_detail: ''
      },
      brands: [],
      selectBrand: '0',
      specs_group_name: '',
      specs: [],
      groups: []
    }
  },
  methods: {
    back() {
      this.$router.push('/goods/list')
    },
    async getSpecsGroup() {
      this.groups = await goods.getSpecsGroup()
    },
    async getSpecs(val) {
      this.specs = await goods.getSpecs(val)
    },
    save() {
      this.form.goods_brand = this.selectBrand
      this.form.goods_group_id = this.specs_group_name
      this.form.list = this.specs
      goods.saveGoods(this.form)
      this.$message.success('保存成功')
      this.$router.push('/goods/list')
    },
    async getBrandsList() {
      this.brands = await goods.getBrandsList()
    }
  },
  created() {
    this.getSpecsGroup()
    this.getBrandsList()
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
