/* eslint-disable class-methods-use-this */
import _axios, { get, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Document {
  // constructor() {}

  // 在这里通过 async await 语法糖让代码同步执行
  // 1. await 一定要搭配 async 来使用
  // 2. await 后面跟的是一个 Promise 对象
  async getDocById(id) {
    const res = await get(`/cms/document/getDocById?id=${id}`)
    return res
  }

  async documentList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/document/documentList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async removedocumentList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/document/removedocumentList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async documenetListByName(pageCount, currentPage, condition) {
    return _axios({
      method: 'get',
      url: `/cms/document/documentList?count=${pageCount}&page=${currentPage}&documentName=${condition.document_title}&documentTypeId=${condition.document_type_id}`,
      handleError: true,
    })
  }

  async removedocumenetListByName(pageCount, currentPage, condition) {
    return _axios({
      method: 'get',
      url: `/cms/document/removedocumentList?count=${pageCount}&page=${currentPage}&documentName=${condition.document_title}&documentTypeId=${condition.document_type_id}`,
      handleError: true,
    })
  }

  async handleBackDocument(id) {
    return _axios({
      method: 'get',
      url: `/cms/document/handleBackDocument?id=${id}`,
      handleError: true,
    })
  }

  async saveDocument(document) {
    return _axios({
      method: 'post',
      data: document,
      url: '/cms/document/saveDocument',
      handleError: true,
    })
  }

  async deleteDocById(id) {
    const res = await _delete(`/cms/document/deleteDocById?id=${id}`)
    return res
  }

  async realDeleteDocById(id) {
    const res = await _delete(`/cms/document/realDeleteDocById?id=${id}`)
    return res
  }

  async getTypeList({ count = this.uCount, page = this.uPage }) {
    return _axios({
      method: 'get',
      url: `/cms/documentType/getTypeList?count=${count}&page=${page}`,
      handleError: true,
    })
  }

  async getTypeById(id) {
    return _axios({
      method: 'get',
      url: `/cms/documentType/getTypeById?id=${id}`,
      handleError: true,
    })
  }

  async saveType(documentType) {
    return _axios({
      method: 'post',
      data: documentType,
      url: '/cms/documentType/saveDocumentType',
      handleError: true,
    })
  }

  async deleteTypeById(id) {
    const res = await _delete(`/cms/documentType/deleteTypeById?id=${id}`)
    return res
  }

  async getTypeListByName(pageCount, currentPage, documentTypeName) {
    return _axios({
      method: 'get',
      url: `/cms/documentType/getTypeList?count=${pageCount}&page=${currentPage}&documentTypeName=${documentTypeName}`,
      handleError: true,
    })
  }

  async getDocumentTypeList() {
    return _axios({
      method: 'get',
      url: '/cms/documentType/getDocumentTypeList',
      handleError: true,
    })
  }
}

export default new Document()
