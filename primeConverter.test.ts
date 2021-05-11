import { primeConverter } from './primeConverter'

it('converts the primes correctly', () => {
  expect(primeConverter(0, 0, 0)).toBe(NaN)
  expect(primeConverter(1, 1, 1)).toBe(1)
  expect(primeConverter(635, 45, 5)).toBe(163306125)
  expect(primeConverter(55, 745, 1)).toBe(1678950625)
})
