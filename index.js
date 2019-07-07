const nedb = require('nedb')
const { tap, untap, ALL } = require('tapsig')

const methods = [
  'loadDatabase',
  'insert',
  'find',
  'findOne',
  'count',
  'update',
  'remove',
  'ensureIndex',
  'removeIndex',
  'exec'
]

module.exports = tap(nedb, {
  [ALL](name) {
    const instance = untap(this)

    if (typeof instance[name] === 'function' && methods.includes(name)) {
      return (...args) => {
        return new Promise((resolve, reject) => {
          instance[name](...args, (error, result) => {
            if (error === null) {
              resolve(result)
            } else {
              reject(error)
            }
          })
        })
      }
    } else {
      return instance[name]
    }
  }
})