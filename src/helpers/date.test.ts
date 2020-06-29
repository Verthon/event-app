import {formatMonth, formatDay} from './date'

describe('format Month tests', () => {
  it('Should return month 3 letter string(MMM).', async() => {
    expect(formatMonth('2018-04-04')).toBe('Apr')
  })
  
  it('Should return month 3 letter string(MMM) with no params provided.', async() => {
    expect(formatMonth()).toBe('Apr')
  })
})

describe('t', async() => {
  it('formatDay should return day in 2 digit format.', async() => {
    expect(formatDay('2018-04-04')).toBe('04')
  })
  it('formatDay should return day in 2 digit format. With no params provided', async() => {
    expect(formatDay()).toBe('04')
  })
})



