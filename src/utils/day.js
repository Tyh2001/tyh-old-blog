/**
 * 格式化时间
 */

export const onTime = (time) => {
  const nowStamp = new Date().getTime()
  const targetStamp = new Date(time).getTime()
  const difference = nowStamp - targetStamp
  const allSeconds = Math.floor(difference / 1000)
  const allMinutes = Math.floor(allSeconds / 60)
  const allHours = Math.floor(allMinutes / 60)
  const day = Math.floor(allHours / 24)
  const hours = allHours % 24
  const minutes = allMinutes % 60
  const seconds = allSeconds % 60
  return `${day}天${hours}小时${minutes}分钟${seconds}秒`
}
