import Http from './index'

export default {
  login: function (username, password) {
    let loginParams = {
      'username': username,
      'mobile': '',
      'password': password,
      'code': '',
      'state': '',
      'ip': ''
    }
    return Http.post('/staff/login/pwd', loginParams)
  }
}
