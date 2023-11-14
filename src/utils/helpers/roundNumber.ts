export const roundNumber = (num: number): number => {
  const roundedFactor = num > 9 ? 100 : 10000
  return Math.round(num * roundedFactor) / roundedFactor
}
