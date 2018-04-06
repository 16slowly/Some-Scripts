/**
 * 复制文本到粘贴板
 *
 * @param {string} target 要复制的目标元素 id,
 * @return {string} result 返回值
 */

function copyText(target) {
  const contentElement = target ? document.querySelector(target) : null;
  let result;

  if (contentElement && contentElement.select) {
    contentElement.select();

    try {
      document.execCommand('copy');
      contentElement.blur();

      result = 'copied';
    } catch (error) {
      result = 'error';
    }

    return result;
  }
}
