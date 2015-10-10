Package.describe({
  name: "stargazing:lib",
  version: "0.0.0"
})

Package.onUse(function(api) {
  api.versionsFrom("1.2.0.1")

  var packages = [
    "standard-minifiers",
    "meteor-base",
    "mobile-experience",
    "mongo",
    "jquery",
    "tracker",
    "logging",
    "reload",
    "random",
    "ejson",
    "check",
    "ecmascript",
    "force-ssl"
  ]

  api.use(packages)
  api.imply(packages)
  
  api.addFiles("stargazing-lib.js")
})
