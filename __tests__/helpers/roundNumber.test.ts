import { roundNumber } from '../../src/helpers/roundNumber'

describe('roundNumber function', () => {
  test('rounds a number with one digit correctly', () => {
    const result = roundNumber(3.14159)
    expect(result).toBe(3.1416)
  })

  test('rounds a number with two digits correctly', () => {
    const result = roundNumber(123.456)
    expect(result).toBe(123.46)
  })

  test('rounds a number with three digits correctly', () => {
    const result = roundNumber(987.654)
    expect(result).toBe(987.65)
  })

  test('rounds a number with more than three digits correctly', () => {
    const result = roundNumber(12345.6789)
    expect(result).toBe(12345.68)
  })

  test('rounds a number less than 1 correctly', () => {
    const result = roundNumber(0.12345)
    expect(result).toBe(0.1235)
  })

  test('rounds a negative number correctly', () => {
    const result = roundNumber(-7.891)
    expect(result).toBe(-7.891)
  })

  test('rounds a number with multiple zeroes correctly', () => {
    const result = roundNumber(0.00012345)
    expect(result).toBe(0.0001)
  })

  test('rounds a number with three decimal places correctly', () => {
    const result = roundNumber(12.345)
    expect(result).toBe(12.345)
  })

  test('rounds a number with four decimal places correctly', () => {
    const result = roundNumber(123.4567)
    expect(result).toBe(123.46)
  })
})
