import Http from './index'

export default {
  list: function (params) {
    return Http.post('/admin/order/list', params)
  },
  // 查询订单详情
  get: function (orderId) {
    return Http.post('/admin/order/info/' + orderId, null)
  },
  // 订单物流信息
  info: function (order) {
    return Http.post('/admin/order/editLogisticsInfo', order)
  },
  // 订单物流状态
  dispatchStatus: function (orderDispatchId) {
    return Http.post('/admin/order/dispatchInfo/' + orderDispatchId, null)
  },
  // 顺丰下单，生成运单号，生成面单
  sfOrder: function (params) {
    return Http.post('/admin/order/sfOrder', params)
  },
  // 售后修改订单收货地址，物流信息
  serviceEdit: function (params) {
    return Http.post('/admin/order/afterSale', params)
  },
  // 打印面单
  print: function (orderId) {
    return Http.post('/admin/order/printFaceSheet/' + orderId, null)
  },
  // 未发货订单更新为已发货
  toStayget: function (orderId) {
    return Http.post('/admin/order/toStayget/' + orderId, null)
  },
  // 快递类型
  sftype: function (params) {
    return Http.post('/admin/sftype/list/1', params)
  },
  // 查看订单收货人信息历史记录
  receiveHistory: function (orderId) {
    return Http.post('/admin/order/receiveHistory/' + orderId, null)
  },
  // 选择发货点
  points: function (orderId, warehouseId) {
    return Http.post('/admin/order/editWarehouse/' + orderId + '/' + warehouseId, null)
  },
  // 代客下单
  // 获取经销商可购买商品列表
  dealerProductsList: function (params) {
    return Http.post('/admin/valetorder/getShopProducts', params)
  },
  // 订单支付
  orderPay: function (params) {
    return Http.post('/admin/valetorder/pay', params)
  },
  // 预下单
  preOrderPay: function (params) {
    return Http.post('/admin/valetorder/prepayment', params)
  },
  // 提交下单
  submitOrder: function (params) {
    return Http.post('/admin/valetorder/submit', params)
  },
  // 添加物流商品详情信息
  addExpressDetails: function (params) {
    return Http.post('/admin/order/addExpressDetails', params)
  },
  // 获取订单商品详情信息
  getOrderProducts: function (orderId) {
    return Http.post('/admin/order/getOrderProducts/' + orderId, null)
  },
  // 添加收货地址
  addAddress: function (params) {
    return Http.post('/admin/valetorder/address/add', params)
  },
  // 填写物流、运输信息（生成运单号、保存物流、运输信息）
  addOrderExpress: function (params) {
    return Http.post('/admin/order/addOrderExpress', params)
  }
}
