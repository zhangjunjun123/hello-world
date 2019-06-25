// 全局过滤器
import moment from 'moment'


const formatDate = function (value, pattern) {
    if (undefined === value || value === null) {
        return ''
    }
    let ptn = pattern
    if (undefined === pattern || pattern === null) {
        ptn = 'YYYY-MM-DD'
    }
    return moment(value).utcOffset(8).format(ptn)
}

const formatTime = function (value, pattern) {
    if (undefined === value || value === null) {
        return ''
    }
    let ptn = pattern
    if (undefined === pattern || pattern === null) {
        ptn = 'YYYY-MM-DD HH:mm:ss'
    }
    return moment(value).utcOffset(8).format(ptn)
}

const formatGender = function(gender) {
    if(gender === null || gender === undefined) {
        return ''
    }
    gender = Number(gender)
    if(gender === 1){
        return '男'
    }else{
        return '女'
    }

}

const formatUserStatus = function(status){
    if(undefined === status || status === null){
        return ''
    }
    if(status){
        return '已启用'
    }else{
        return '已禁用'
    }
}
export default {
    formatDate, formatTime, formatGender, formatUserStatus
}
