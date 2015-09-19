Package.describe({
  name: 'stargazing:components',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: ''
})

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.17')
  api.use('ecmascript')

  api.imply([
    'stargazing:accounts',
    'stargazing:layouts@0.0.0'
  ])
})
