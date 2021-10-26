/* eslint-disable class-methods-use-this */
import _axios, { get, put, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Goods {
  // constructor() {}

  // 类中的方法可以代表一个用户行为
  async createGoods(data) {
    return _axios({
      method: 'post',
      url: 'v1/book',
      data,
    })
  }

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象
  async getGoods(id) {
    const res = await get(`/cms/goods/getGoodsById?goodsId=${id}`)
    return res
  }

  async editGoods(id, info) {
    const res = await put('/cms/goods/updateGoods', info)
    return res
  }

  async deleteGoods(id) {
    const res = await _delete(`/cms/goods/deleteGoods?goodsId=${id}`)
    return res
  }

  async goodsList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/goods/goodsList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async getBrands() {
    return _axios({
      method: 'get',
      url: '/cms/goods/getBrands',
      handleError: true,
    })
  }

  async getSpecsGroup() {
    return _axios({
      method: 'get',
      url: '/cms/goods/getSpecsGroup',
      handleError: true,
    })
  }

  async getSpecs(id) {
    return _axios({
      method: 'get',
      url: `/cms/goods/getSpecs?id=${id}`,
      handleError: true,
    })
  }

  async getSpecsByIdAndGoodsId(id, goodsId) {
    return _axios({
      method: 'get',
      url: `/cms/goods/getSpecs?id=${id}&goodsId=${goodsId}`,
      handleError: true,
    })
  }

  async saveGoods(goods) {
    return _axios({
      method: 'post',
      data: goods,
      url: '/cms/goods/saveGoods',
      handleError: true,
    })
  }

  async getBrandsList() {
    return _axios({
      method: 'get',
      url: '/cms/goods/getBrandsList',
      handleError: true,
    })
  }

  async getGoodsByCondition(goods) {
    const res = await get(`/cms/goods/goodsList?goodsName=${goods.goodsName}&goodsBrands=${goods.goodsBrands}`)
    return res
  }
}

export default new Goods()
