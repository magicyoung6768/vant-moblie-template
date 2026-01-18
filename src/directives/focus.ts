export default {
  mounted(el) {
    el.focus()
    // iOS兼容：触发点击以弹出键盘
    if (/iphone/i.test(navigator.userAgent)) el.click()
  }
}
