/**
 * 用于发布文章的表情转译
 */

export const transformation = (str) => {
  str = str.replace(/\[em_([0-9]*)\]/g, "<img src='表情/emoji表情/$1.png'>")
  return str
}
