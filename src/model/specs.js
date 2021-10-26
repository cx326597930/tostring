/* eslint-disable class-methods-use-this */
import _axios, { get, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Specs {
  // constructor() {}

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象
  async getSpecs(id) {
    const res = await get(`/cms/specs/getColoId?id=${id}`)
    return res
  }

  async specsList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      // headers: { token: '123' },
      url: `/cms/specs/specsList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async specsListByName(pageCount, currentPage, specsName) {
    return _axios({
      method: 'get',
      url: `/cms/specs/specsList?count=${pageCount}&page=${currentPage}&specsName=${specsName}`,
      handleError: true,
    })
  }

  async saveSpecs(specsData) {
    return _axios({
      method: 'post',
      data: specsData,
      url: '/cms/specs/saveSpecs',
      handleError: true,
    })
  }

  async deleteSpecs(id) {
    const res = await _delete(`/cms/specs/deleteSpecs?id=${id}`)
    return res
  }

  async getSpecsById(id) {
    return _axios({
      method: 'get',
      url: `/cms/specs/getSpecsById?id=${id}`,
      handleError: true,
    })
  }

  async getSpecsGroup() {
    const res = await get('/cms/specs/getSpecsGroup')
    return res
  }
}

export default new Specs()
