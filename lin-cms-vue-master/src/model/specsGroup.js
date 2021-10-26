/* eslint-disable class-methods-use-this */
import _axios, {} from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class SpecsGroup {
  // constructor() {}

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象

  async specsGroupList({ count = this.uCount, page = this.uPage }) {
    debugger
    return _axios({
      method: 'get',
      url: `/cms/specsGroup/specsGroupList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async specsGroupListByName(pageCount, currentPage, specsGroupName) {
    return _axios({
      method: 'get',
      url: `/cms/specsGroup/specsGroupList?count=${pageCount}&page=${currentPage}&specsGroupName=${specsGroupName}`,
      handleError: true,
    })
  }

  async saveSpecsGroup(specsGroupData) {
    return _axios({
      method: 'post',
      data: specsGroupData,
      url: '/cms/specsGroup/saveSpecsGroup',
      handleError: true,
    })
  }

  async getspecsGroupById(id) {
    return _axios({
      method: 'get',
      url: `/cms/specsGroup/getspecsGroupById?id=${id}`,
      handleError: true,
    })
  }
}

export default new SpecsGroup()
