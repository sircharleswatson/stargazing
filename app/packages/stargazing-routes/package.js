Package.describe({
  name: 'stargazing:routes',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: 'Routes package for Stargazing app',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.15');
  api.use('ecmascript');
});
