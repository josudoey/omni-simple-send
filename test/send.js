/* eslint-env mocha */
const assert = require('assert')
describe('Simple Send', function () {
  const omniSend = require('../')
  it('base', function () {
    const token = 31 // USDT
    const amount = 1e9 // 10 USDT
    const omniData = omniSend(token, amount)
    assert.strictEqual('6f6d6e69000000000000001f000000003b9aca00', omniData.toString('hex'))
  })
})
