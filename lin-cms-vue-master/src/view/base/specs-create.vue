<template>
    <div class="container">
      <div class="title">
        <span>新增规格</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
      </div>
      <!--横线-->
      <el-divider></el-divider>
      <!--主体内容-->
      <div class="wrap">
        <el-row>
          <el-col :lg="16" :md="20" :sm="24" :xs="24">
            <el-form status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
              <el-form-item label="规格组" prop="goods_brand">
                <el-select v-model="selectSpecsGroup" placeholder="规格组">
                  <el-option label="请选择" value="-1" ></el-option>
                  <el-option  v-for="(item,index) in specsGroup" :key="index" :label="item.specs_group_name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="规格数量" prop="goods_name">
                <el-input style="width:30%;" min="1" max="10"  @blur="changeData" v-model="specsNumber" size="medium" type="number"  placeholder="请填写规格数量"></el-input>
              </el-form-item>
              <!--<el-form-item label="颜色" prop="color_id">-->
                <label class="el-form-item__label" style="width: 100px;">规格颜色</label>
                <el-transfer @change="changeData" :props="{key: 'id',label: 'name'}" :titles="['颜色列表','已选中颜色']" v-model="value" :data="data"></el-transfer>
              <!--</el-form-item>-->
              <el-form-item  label="商品规格"  v-if="specs.length>0">
                <div v-for="(item,index) in specs" :key="index">
                  <el-input v-model="item.specs_key" placeholder="规格名" style="width:26%;margin-right:2%;margin-top: 2%"></el-input>
                  <el-input v-model="item.specs_value" placeholder="规格值" style="width:26%;margin-right:2%;margin-top: 1%"></el-input>
                  <el-input v-model="item.specs_color" placeholder="规格颜色" style="width:26%;margin-right:2%;margin-top: 1%"></el-input>
                </div>
              </el-form-item>
              <el-form-item class="submit">
                <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import color from '@/model/color'
import specs from '@/model/specs'

export default {
  data() {
    return {
      loading: false,
      selectColor: '',
      colors: [],
      specsNumber: '',
      data: [
        { id: '1', name: '红' },
        { id: '2', name: '黄' },
        { id: '3', name: '蓝' },
        { id: '4', name: '绿' },
        { id: '5', name: '黑' },
        { id: '6', name: '紫' },
        { id: '7', name: '白' }
      ],
      specs: [],
      value: [],
      selectSpecsGroup: '-1',
      specsGroup: [
        { id: '1', specs_group_name: '规格1' },
        { id: '2', specs_group_name: '规格2' }
      ]
    }
  },
  methods: {
    back() {
      this.$emit('editClose')
    },
    changeData() {
      this.specs = []
      for (let i = 0; i < this.specsNumber; i++) { // 遍历规格数量
        for (let j = 0; j < this.value.length; j++) { // 遍历选择的颜色
          this.data.forEach((key, val) => { // 根据数组的ID获取值
            Object.keys(key).forEach(v => {
              if (this.data[val][v] === this.value[j]) {
                this.specs.push({
                  specs_key: '',
                  specs_value: '',
                  specs_color: this.data[val].name,
                  color: this.data[val].id,
                })
              }
            })
          })
        }
      }
    },
    async getColor() {
      const data = await color.getColorList()
      this.data = data
    },
    async getSpecsGroup() {
      const specsGroup = await specs.getSpecsGroup()
      this.specsGroup = specsGroup
    }
  },
  created() {
    this.getColor()
    this.getSpecsGroup()
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
