/*
* @params times String, 毫秒数，connector String 如 -，., Array 如 ['年', '月', '日']
* return 日期，比如 XXX-XX-XX，XXX.XX.XX. XXX年XX月XX日
*/

// es5 版本
function formatDate(times, connector) {
    var date = new Date(times);
    var year = date.getFullYear()  // 获取年份
    var month = date.getMonth() + 1 // 获取月份
    var day = date.getDate()  // 获取某天

    // 补0
    month =  month > 10 ? month : ('0' + month)
    day = day > 10 ? day : ('0' + day)

    if(connector instanceof Array && connector.length > 0) {
      return year + connector[0] + month + connector[1] + day + connector[2]
    } else {
      return year + connector + month + connector + day
    }
}

// es6 版本
export const formatDate = (times, connector) => {
  const date = new Date(times);
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)

  if(connector instanceof Array && connector.length > 0) {
    return `${year}${connector[0]}${month}${connector[1]}${day}${connector[2]}`
  } else {
    return `${year}${connector}${month}${connector}${day}`
  }
}
