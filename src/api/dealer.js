import Http from './index'

export default {
  // --------------- 经销商基本信息接口 ---------------
  // 查询经销商
  list: function (params) {
    return Http.post('/admin/dealer/list', params)
  },
  // 查询经销商：按照销售分组
  listByGroup: function (salesGroupId) {
    return Http.post('/admin/dealer/list/' + salesGroupId, null)
  },
  // 新增经销商
  add: function (dealer) {
    return Http.post('/admin/dealer/add', dealer)
  },
  // 更新经销商基础信息
  update: function (dealer) {
    return Http.post('/admin/dealer/update', dealer)
  },
  // 禁用经销商
  disable: function (dealerId) {
    return Http.post('/admin/dealer/disable/' + dealerId, null)
  },
  // 启用经销商
  enable: function (dealerId) {
    return Http.post('/admin/dealer/enable/' + dealerId, null)
  },
  // 清除经销商基础信息（解约）
  terminate: function (dealerId) {
    return Http.post('/admin/dealer/authority/clear/' + dealerId, null)
  },
  // --------------- 授权接口 ------------------
  // 查询经销商授权
  listAuthority: function (dealerId) {
    return Http.post('/admin/dealer/authority/get/' + dealerId, null)
  },
  // 增加经销商授权
  addAuthority: function (authority) {
    return Http.post('/admin/dealer/authority/add', authority)
  },
  // 更新经销商基础信息
  removeAuthority: function (authorityId) {
    return Http.post('/admin/dealer/authority/remove/' + authorityId, null)
  },
  // --------------- 成员接口 ------------------
  // 查询经销商成员
  listMember: function (dealerId) {
    return Http.post('/admin/dealer/member/list/' + dealerId, null)
  },
  // 增加经销商成员
  addMember: function (dealerMember) {
    return Http.post('/admin/dealer/member/add', dealerMember)
  },
  // 删除经销商成员
  removeMember: function (dealerMemberId) {
    return Http.post('/admin/dealer/member/remove/' + dealerMemberId, null)
  },

  // --------------- 地址接口 ------------------
  // 查询经销商成员
  listAddress: function (dealerId) {
    return Http.post('/admin/dealer/address/list/' + dealerId, null)
  },
  // 增加经销商成员
  addAddress: function (dealerAddress) {
    return Http.post('/admin/dealer/address/add', dealerAddress)
  },
  // 删除经销商配货地址
  removeAddress: function (addressId) {
    return Http.post('/admin/dealer/address/delete/' + addressId, null)
  },

  // ------------------- 资金账户接口 --------------------
  // return DealerAccount List
  listAccount: function (dealerId) {
    return Http.post('/admin/dealer/account/list/' + dealerId, null)
  },
  // return DealerAccountRecord List
  listAccountRecords: function (accountId, param) {
    return Http.post('/admin/dealer/account/record/list/' + accountId, param)
  },
  // ------------------- 费用接口 -----------------
  // 查询经销商费用单
  listFee: function (params) {
    return Http.post('/admin/dealer/fee/list', params)
  },
  // 查询经销商费用单详细信息
  getFee: function (feeId) {
    return Http.post('/admin/dealer/fee/get/' + feeId, null)
  },
  // 提交经销商费用单
  applyFee: function (dealerFee) {
    return Http.post('/admin/dealer/fee/apply', dealerFee)
  },
  // 审核经销商费用单：业务审核
  approveFee: function (feeId, feeApprovelInfo) {
    return Http.post('/admin/dealer/fee/approve/' + feeId, feeApprovelInfo)
  },
  // 复核经销商费用单：财务审核
  auditFee: function (feeId, feeApprovelInfo) {
    return Http.post('/admin/dealer/fee/audit/' + feeId, feeApprovelInfo)
  },

  // ------------- 违规处罚接口 ---------------
  // 违规处理审核
  approveViolation: function (violationId, params) {
    return Http.post('/admin/dealer/violation/approve/' + violationId, params)
  },
  // 违规处理复核
  auditViolation: function (violationId, params) {
    return Http.post('/admin/dealer/violation/audit/' + violationId, params)
  },
  // 查询违规处罚详细信息
  getViolation: function (violationId) {
    return Http.post('/admin/dealer/violation/get/' + violationId, null)
  },
  // 查询违规处罚清单
  listViolation: function (params) {
    return Http.post('/admin/dealer/violation/list', params)
  },
  // 启动违规处理
  applyViolation: function (prams) {
    return Http.post('/admin/dealer/violation/new', prams)
  }
}
