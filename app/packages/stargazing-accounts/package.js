Package.describe({
  name: 'stargazing:accounts',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.17')

  const packages = [
    'ecmascript',
    'react',
    'accounts-base',
    'accounts-password'
  ]

  api.use(packages)

  api.addFiles('stargazing-accounts.js')

  api.addFiles('forms/login.jsx')
  api.addFiles('forms/register.jsx')
})