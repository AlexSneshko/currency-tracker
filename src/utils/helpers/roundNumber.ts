export const roundNumber = (num: number): number => {
  const roundedFactor = num > 9 ? (num > 99 ? 100 : 1000) : 10000
  return Math.round(num * roundedFactor) / roundedFactor
}
