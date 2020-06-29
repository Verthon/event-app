import dayjs from 'dayjs'

export const formatMonth = (date='2018-04-04') => {
  return dayjs(date).format('MMM')
}
export const formatDay = (date='2018-04-04') => {
  return dayjs(date).format('DD')
}