/* eslint-disable class-methods-use-this */
import _axios, { get, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Brand {
  // constructor() {}

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象
  async getBrand(id) {
    const res = await get(`/cms/goods/getGoodsById?goodsId=${id}`)
    return res
  }

  async brandList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/brand/brandList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async brandListByName(pageCount, currentPage, brandname) {
    return _axios({
      method: 'get',
      url: `/cms/brand/brandList?count=${pageCount}&page=${currentPage}&brandName=${brandname}`,
      handleError: true,
    })
  }

  async saveBrand(brandData) {
    return _axios({
      method: 'post',
      data: brandData,
      url: '/cms/brand/saveBrand',
      handleError: true,
    })
  }

  async deleteBrand(id) {
    const res = await _delete(`/cms/brand/deleteBrand?id=${id}`)
    return res
  }

  async getBrandById(id) {
    return _axios({
      method: 'get',
      url: `/cms/brand/getBrandById?id=${id}`,
      handleError: true,
    })
  }
}

export default new Brand()
