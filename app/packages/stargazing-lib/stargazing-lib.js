/**
 * This is the only file where globals should be declared.
 * We do this so we can have all other files in strict mode.
 */

Stargazing = {
  // Meteor Mongo Collections
  Collections: {},
  Components: {},
  Constants: {},
  // small reusable utilities
  Utils: {}
}

const global = this
global.Stargazing = Stargazing
