/**
 * set cookie
 * @param {string} name cookie 名
 * @param {string} value cookie 值
 * @param {number} days 过期期限 默认 30 天
 */
const set = (name, value, days = 30) => {
  const date = new Date();
  const time = days * 24 * 3600 * 1000;
  date.setTime(date.getTime() + time);

  // TODO: 可以与后端商定加密规范对 value 进行加密处理
  const expires = days ? `expires=${date.toUTCString()}` : ''

  // NOTE: cookie 不会被覆盖，每次 set 是将 cookie 追加到 document.cookie 尾部
  // expires = -1 时，立马被销毁
  // @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
  document.cookie = `${name}=${value};${expires};`
}

/**
 * get cookie
 * @param {string} name cookie 名
 * @return {string} cookie 过期的 cookie 将会被自动销毁 返回 null
 */
const get = name => {
  const cookies = document.cookie.split(';')

  // NOTE: trim() 去掉字符串前导及尾部等无用空格，每个 cookie 之间使用了空格进行隔开
  // startWith() 匹配以某一字符开始的字符串， IE 不支持，最好使用正则进行匹配
  const value = cookies.find(cookie => cookie.trim().startWith(`${name}=`))

  return !value ? null : value.split('=')[1]
}

export default {set, get}


/**
 * NOTE:
 * bug: 后端将 set-cookie 加上 'HttpOnly' 属性, 客户端脚本无法操作 cookie
 * tips: 'HttpOnly' 属性是为了防止XSS攻击, see http://desert3.iteye.com/blog/869080
 */
