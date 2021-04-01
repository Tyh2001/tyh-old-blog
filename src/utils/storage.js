/**
 * 本地存储
 */

// 添加本地存储
export const setStorage = (name, data) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}

// 获取本地存储数据
export const getStorage = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除本地存储数据
export const removeStorage = name => {
  return window.localStorage.removeItem(name)
}
