import Http from './index'

export default {
  // 新增销售组
  addGroup: function (group) {
    return Http.post('/admin/sales/group/add', group)
  },
  // 查询销售分组
  listGroup: function (params) {
    return Http.post('/admin/sales/group/list', params)
  },
  // 更新销售组基本信息
  updateGroup: function (group) {
    return Http.post('/admin/sales/group/update', group)
  },
  getGroup: function (groupId) {
    return Http.post('/admin/sales/group/get/' + groupId, null)
  },
  // 查询组员
  listGroupMembers: function (groupId) {
    return Http.post('/admin/sales/group/members/' + groupId, null)
  },
  // 新增销售组成员
  addGroupMember: function (saleGroupMember) {
    return Http.post('/admin/sales/group/members/add', saleGroupMember)
  },
  // 将成员丛组中移除
  removeMemberFromGroup: function (groupId, memberStaffId) {
    return Http.post('/admin/sales/group/members/remove/' + groupId + '/' + memberStaffId, null)
  },
  // 指定销售组组长，组员
  // updateGroupMembers: function (groupId, salesGroupMembers) {
  //   return Http.post('/admin/sales/group/members/update/' + groupId, salesGroupMembers)
  // },
  updateGroupLeader: function (groupId, saleMemberStaffId) {
    return Http.post('/admin/sales/group/leader/' + groupId + '/' + saleMemberStaffId, null)
  },
  getGroupMember: function (groupId, memberStaffId) {
    return Http.post('/admin/sales/group/members/get/' + groupId + '/' + memberStaffId, null)
  },
  // 查询销售目标
  listVolumn: function (params) {
    return Http.post('/admin/sales/goal/list', params)
  },
  getVolumn: function (salesGroupId, salesMemberStaffId, periodId) {
    return Http.post('/admin/sales/goal/get/' + salesGroupId + '/' + salesMemberStaffId + '/' + periodId, null)
  },
  // 新增销售目标
  addVolumn: function (volumn) {
    return Http.post('/admin/sales/goal/new', volumn)
  },
  // 调整销售目标
  updateVolumn: function (volumn) {
    return Http.post('/admin/sales/goal/update', volumn)
  },
  // 查询销售目标完成情况
  listResult: function (params) {
    return Http.post('/admin/sales/goal/result/list', params)
  }, 
  // 销售周期管理
  listPeriod: function (params) {
    return Http.post('/admin/sales/period/list', params)
  },
  addPeriod: function (period) {
    return Http.post('/admin/sales/period/add', period)
  },
  updatePeriod: function (period) {
    return Http.post('/admin/sales/period/update', period)
  },
  getPeriod: function (periodId) {
    return Http.post('/admin/sales/period/get/' + periodId, null)
  }

}
