const { getConfig } = require('guld-git-config')
const { getName } = require('guld-user')
var fs

async function getAddress (owner) {
  owner = owner || await getName()
  try {
    var uconf = await getConfig('public', owner)
  } catch (e) {
    return
  }
  if (uconf && uconf.user && uconf.user.email) return uconf.user.email
}

module.exports = {
  getAddress: getAddress
}
