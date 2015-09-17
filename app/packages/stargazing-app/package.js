Package.describe({
  name: 'stargazing:app',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: 'Stargazing app Umbrella Package'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.15');
  api.use('ecmascript');

  api.imply([
    'stargazing:core'
  ])
});
