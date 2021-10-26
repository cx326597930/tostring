/* eslint-disable class-methods-use-this */
import _axios, { get, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Color {
  // constructor() {}

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象
  async getColor(id) {
    const res = await get(`/cms/color/getColoId?id=${id}`)
    return res
  }

  async colorList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/color/colorList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async colorListByName(pageCount, currentPage, colorName) {
    return _axios({
      method: 'get',
      url: `/cms/color/colorList?count=${pageCount}&page=${currentPage}&colorName=${colorName}`,
      handleError: true,
    })
  }

  async saveColor(colorData) {
    return _axios({
      method: 'post',
      data: colorData,
      url: '/cms/color/saveColor',
      handleError: true,
    })
  }

  async deleteColor(id) {
    const res = await _delete(`/cms/color/deleteColor?id=${id}`)
    return res
  }

  async getColorById(id) {
    return _axios({
      method: 'get',
      url: `/cms/color/getColorById?id=${id}`,
      handleError: true,
    })
  }

  async getColorList() {
    return _axios({
      method: 'get',
      url: '/cms/color/getColorList',
      handleError: true,
    })
  }
}

export default new Color()
