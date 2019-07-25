import Http from './index'

export default {
  // 新增企业
  add: function (supplier) {
    return Http.post('/admin/supplier/add', supplier)
  },
  // 更新企业基础信息
  update: function (supplier) {
    return Http.post('/admin/supplier/update', supplier)
  },
  // 查询企业
  list: function () {
    return Http.post('/admin/supplier/list', null)
  },
  get: function (supplierId) {
    return Http.post('/admin/supplier/get/' + supplierId, null)
  }
}