# omni-simple-send

## Installation

```bash
$ npm install --save omni-simple-send
```

## Example

```js
const omniSend = require('omni-simple-send')
const token = 31   //USDT
const amount = 1e9 // 10 USDT
const omniData = omniSend(token, amount)
console.log(omniData.toString('hex'))

// Output:
// 6f6d6e69000000000000001f000000003b9aca00
```