const leftPad = require('left-pad')
const BN = require('bn.js')
const toHex = function (n, len) {
  const hex = new BN(n).toString(16)
  if (!len) {
    return hex
  }

  if (hex.length > len) {
    throw new Error('length overflow')
  }

  return leftPad(hex, len, '0')
}

// ref https://github.com/OmniLayer/spec#transfer-coins-simple-send
exports = module.exports = function (token, amount) {
  const version = 0
  const type = 0
  const _magic = Buffer.from('omni')
  const _version = Buffer.from(toHex(type, 4, '0'), 'hex')
  const _type = Buffer.from(toHex(version, 4, '0'), 'hex')
  const _token = Buffer.from(toHex(token, 8, '0'), 'hex')
  const _amount = Buffer.from(toHex(amount, 16, '0'), 'hex')
  return Buffer.concat([_magic, _version, _type, _token, _amount])
}
