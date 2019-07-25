import Http from './index'

export default {
  // 新增企业
  add: function (catalog) {
    return Http.post('/admin/catalog/add', catalog)
  },
  // 更新企业基础信息
  update: function (catalog) {
    return Http.post('/admin/catalog/update', catalog)
  },
  // 查询企业
  list: function () {
    return Http.post('/admin/catalog/list', null)
  },
  get: function (catalogId) {
    return Http.post('/admin/catalog/get/' + catalogId, null)
  },
  updateOrder: function (params) {
    return Http.post('/admin/catalog/order', params)
  }
}