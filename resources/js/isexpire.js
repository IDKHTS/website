function withinTimeLimit (start, end) {
  if (!start || !end) return false
  const startTime = new Date(start).getTime()
  const endTime = new Date(end).getTime()
  const nowTime = new Date().getTime()

  let result = false

  if (nowTime > endTime) {
    result = false
  } else if (nowTime > startTime && nowTime < endTime) {
    result = true
  }
  return result
}

export default withinTimeLimit
