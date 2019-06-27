import Http from './index'
export default {
    list: function (params) {
      return Http.post('/admin/dealer/list', params)
    },
    listFee: function (params) {
      return Http.post('/admin/dealer/fee/list', params)
    }

  }
  