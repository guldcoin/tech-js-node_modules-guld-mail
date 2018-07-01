/* eslint-env node, mocha */
const assert = require('chai').assert
const { getAddress } = require('./index.js')
const { getFS } = require('guld-fs')
var fs
var guldname

describe('guld-mail', function () {
  before(async function () {
    guldname = await guldName()
  })
  describe('getAddress', function () {
    after(async function () {
      delete process.env.GULDNAME
      delete global.GULDNAME
      guldname = await guldName()
    })
  })
})
