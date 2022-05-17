export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero (str) {
    return ("00" + str).substr(str.length);
}
export function febDays (year) {
    let day = 28;
    // 世纪年 eg: 2000, 1900
    if (/00$/.test(year)) {
        year % 400 === 0 ? day = 29 : ""
    } else {
        year % 4 === 0 ? day = 29 : ""
    }
    return day;
}