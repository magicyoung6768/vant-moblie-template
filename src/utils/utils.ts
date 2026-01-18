/**
 * 是否为移动端
 */
export const isMobile = () => {
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  return /android|avantgo|blackberry|iemobile|ipad|iphone|ipod|opera mini|opera mobi|palm|pocket|psp|series(4|6)0|symbian|windows ce|windows phone|xda|xiino/i.test(
    userAgent
  )
}

