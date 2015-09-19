Auth = {}

Auth.loggedIn = function() {
  if (!Meteor.user()) {
    return false
  }

  return true
}

























Stargazing.Utils.Auth = Auth
