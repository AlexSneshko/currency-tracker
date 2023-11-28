export const roundNumber = (num: number): number => {
  const roundedFactor = num >= 10 ? (num >= 100 ? 100 : 1000) : 10000
  return Math.round(num * roundedFactor) / roundedFactor
}
