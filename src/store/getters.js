/*
    包含多个基于state的getter计算属性的对象 ： 
    比如state管理了address对象,但是组建中要地址的字符串，可以在这写将对象改为字符串的函数操作，导出供外部使用
    由于我们state只管理了user、token无计算需求。暂时不用getters文件
*/
export const currentUser = state => state.user
export const accessToken = state => state.token

