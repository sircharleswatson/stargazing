Package.describe({
  name: "stargazing:routes",
  version: "0.0.0",
  // Brief, one-line summary of the package.
  summary: "Routes package for Stargazing app"
})

Package.onUse(function(api) {
  api.versionsFrom("1.2")

  var packages = [
    "ecmascript",
    "react",
    "reactrouter:react-router@0.1.7",
    "stargazing:components"
  ]

  api.use(packages)

  api.addFiles([
    "lib/routes.jsx"
  ], "client")
})
