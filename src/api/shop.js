import Http from './index'

export default {
  // 创建新店铺
  add: function (shop) {
    return Http.post('/admin/shop/add', shop)
  },
  // 更新店铺信息
  update: function (shop) {
    return Http.post('/admin/shop/update', shop)
  },
  // 获取店铺详情
  get: function (shopId) {
    return Http.post('/admin/shop/get/' + shopId, null)
  },
  // 店铺列表
  list: function () {
    return Http.post('/admin/shop/list', null)
  },

  // 店铺品类模块
  // 店铺品类管理
  listImportableCatalogs: function (shopId) {
    return Http.post('/admin/shop/catalog/list/import/' + shopId, null)
  },
  // 店铺品类管理
  listCatalogs: function (shopId) {
    return Http.post('/admin/shop/catalog/list/' + shopId, null)
  },
  // 将分类引入店铺
  importCatalog: function (params) {
    return Http.post('/admin/shop/catalog/import/' + params.shopId + '/' + params.catalogId, null)
  },
  enableCatalog: function (shopId, catalogId) {
    return Http.post('/admin/shop/catalog/enable/' + shopId + '/' + catalogId, null)
  },
  disableCatalog: function (shopId, catalogId) {
    return Http.post('/admin/shop/catalog/disable/' + shopId + '/' + catalogId, null)
  },
  // 调整分类在店铺中的顺序
  updateCatalogOrder: function (catalogOrder) {
    return Http.post('/admin/shop/catalog/order', catalogOrder)
  },
  // 添加店铺分类
  addShopCatalog: function (shopId, catalogId) {
    return Http.post('/admin/shop/catalog/add/' + shopId + '/' + catalogId, null)
  },
  // 删除店铺分类
  deleteShopCatalog: function (shopId, catalogId) {
    return Http.post('/admin/shop/catalog/delete/' + shopId + '/' + catalogId, null)
  },

  // 店铺商品部分
  // 查询商品
  listProducts: function (params) {
    return Http.post('/admin/shop/product/list', params)
  },
  // 查询可导入商品
  listImportableProducts: function (params) {
    return Http.post('/admin/shop/product/list/import', params)
  },
  // 导入商品
  importProduct: function (params) {
    return Http.post('/admin/shop/product/import', params)
  },
  getProduct: function (shopProductId) {
    return Http.post('/admin/shop/product/get/' + shopProductId, null)
  },
  addProduct: function (params) {
    return Http.post('/admin/shop/product/add', params)
  },
  // 上架商品
  onsale: function (shopProductId) {
    return Http.post('/admin/shop/product/onsale/' + shopProductId, null)
  },
  // 下架商品
  offsale: function (shopProductId) {
    return Http.post('/admin/shop/product/offsale/' + shopProductId, null)
  },
  // 更新店铺
  productUpdate: function (params) {
    return Http.post('/admin/shop/update', params)
  }
}
