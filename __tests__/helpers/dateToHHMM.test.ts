import { dateToHHMM } from '../../src/helpers/dateToHHMM'

describe('dateToHHMM function', () => {
  it('formats date correctly for hours and minutes', () => {
    const inputDate = new Date(2023, 0, 1, 12, 30)

    const result = dateToHHMM(inputDate)

    expect(result).toBe('12:30')
  })

  it('formats date correctly for midnight', () => {
    const inputDate = new Date(2023, 0, 1, 0, 0)

    const result = dateToHHMM(inputDate)

    expect(result).toBe('00:00')
  })

  it('handles single-digit hours and minutes', () => {
    const inputDate = new Date(2023, 0, 1, 5, 8)

    const result = dateToHHMM(inputDate)

    expect(result).toBe('05:08')
  })
})
