import Http from './index'

export default {
  // 新增企业
  add: function (company) {
    return Http.post('/admin/company/add', company)
  },
  // 更新企业基础信息
  update: function (company) {
    return Http.post('/admin/company/update', company)
  },
  // 查询企业
  list: function () {
    return Http.post('/admin/company/list', null)
  },
  get: function (companyId) {
    return Http.post('/admin/company/get/' + companyId, null)
  }
}
