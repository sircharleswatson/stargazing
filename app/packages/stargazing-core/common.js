/**
 * This is the only file where globals should be declared.
 * We do this so we can have all other files in strict mode.
 */

Stargazing = {
    Constants: {},
    // small reusable utilities
    Utils: {},
    // Meteor Mongo Collections
    Collections: {}
};

const global = this;
global.Stargazing = Stargazing;
