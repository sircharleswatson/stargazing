Package.describe({
  name: "stargazing:core",
  version: "0.0.0",
  summary: "Stargazing app Umbrella Package"
})

Package.onUse(function(api) {

  var packages = [
    "stargazing:lib@0.0.0",
    "stargazing:styles@0.0.0",
    "stargazing:components@0.0.0",
    "stargazing:router@0.0.0"
  ]

  api.use(packages)

})
