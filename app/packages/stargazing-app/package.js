Package.describe({
  name: 'stargazing:app',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: 'Stargazing app Umbrella Package'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2')
  api.use('ecmascript')

  var packages = [
    'stargazing:core@0.0.0',
    'stargazing:auth@0.0.0',
    'stargazing:routes@0.0.0',
    'stargazing:components@0.0.0',
    'stargazing:accounts@0.0.0'
  ]

  api.use(packages)
  api.imply(packages)
})
