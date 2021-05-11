import { ok, strictEqual } from 'assert'
import { primeConverter } from './primeConverter'

function decoder(integers: number[], primes: [number, number, number]) {
  const [xPrime, yPrime, zPrime] = primes

  strictEqual(xPrime.toString().length, 4)
  strictEqual(yPrime.toString().length, 5)
  strictEqual(zPrime.toString().length, 3)
}
