import Http from './index'

export default {
  list: function () {
    return Http.post('/admin/user/list', '')
  },
  get: function (staffUserId) {
    return Http.post('/admin/user/get/'+staffUserId, '')
  },
  add: function(staffUser) {
    return Http.post('/admin/user/add', staffUser)
  },
  update: function(staffUser) {
    return Http.post('/admin/user/edit', staffUser)
  },
  disable: function (staffUserId) {
    return Http.post('/admin/user/disable/'+staffUserId, "")
  },
  enable: function (staffUserId) {
    return Http.post('/admin/user/enable/'+staffUserId, "")
  },
  listRoles: function(){
    return Http.post('/admin/role/list', '')
  },
  uploadFile: function(file){
    return Http.post('/admin/cms/document/upload', file)
  }
}
