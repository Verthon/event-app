import dayjs from 'dayjs'

export const formatMonth = (date: string) => {
  return dayjs(date).format('MMM')
}
export const formatDay = (date: string) => {
  return dayjs(date).format('DD')
}