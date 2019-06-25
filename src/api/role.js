import Http from './index'

export default {
  list: function () {
    return Http.post('/admin/role/list', '')
  },
  get: function (roleName) {
    return Http.post('/admin/role/get/'+roleName, '')
  },
  add: function(role) {
    return Http.post('/admin/role/add', role)
  },
  update: function(role) {
    return Http.post('/admin/role/edit', role)
  },
  delete: function(roleName) {
    return Http.post('/admin/role/delete/'+roleName, '')
  }
}
