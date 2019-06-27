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

const formatCNY = function (price) {
    if (undefined === price || price === null) {
        return ''
    }
    // 金额小于1元
    if (price < 100) {
        // 小于0.1元
        if (price < 10) {
            return '￥0.0' + price
        } else {
            if (price % 10 === 0) {
                return '￥0.' + price
            } else {
                return '￥0.' + price
            }
        }
        // 金额大于1元
    } else {
        if (price % 100 < 10) {
            return '￥' + parseInt(price / 100) + '.0' + (price % 100)
        } else {
            return '￥' + parseInt(price / 100) + '.' + (price % 100)
        }
    }
}
export default {
    formatDate, formatTime, formatGender, formatUserStatus, formatCNY
}
