import { ok, strictEqual } from 'assert'
import { primeConverter } from './primeConverter'

function decoder(integers: number[], primes: [number, number, number]) {
  const [xPrime, yPrime, zPrime] = primes

  strictEqual(xPrime.toString().length, 4)
  strictEqual(yPrime.toString().length, 5)
  strictEqual(zPrime.toString().length, 3)
  
  const passwordAsNumber = Math.floor(primeConverter(...primes))
  const fullPassword = BigInt(passwordAsNumber).toString()
  const password = fullPassword.substring(0, integers.length)

  const result = []
  for (let i = 0; i < integers.length; i++) {
    const integer = integers[i]
    const passwordChar = password.charAt(i)
    const res = integer ^ parseInt(passwordChar)
    result.push(res)
  }

  console.log(result.join(''))
}
