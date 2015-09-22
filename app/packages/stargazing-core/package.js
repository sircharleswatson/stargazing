Package.describe({
  name: 'stargazing:core',
  version: '0.0.0',
  summary: 'Defines the global namespaces and the application configuration.'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2')
  api.use('ecmascript')
  api.addFiles('common.js')
  api.export('Stargazing')
})
