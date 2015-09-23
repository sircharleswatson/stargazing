Package.describe({
  name: 'stargazing:components',
  version: '0.0.0',
  // Brief, one-line summary of the package.
  summary: ''
})

Package.onUse(function(api) {
  api.versionsFrom('1.2')
  api.use([
    'ecmascript',
    'react'
  ])

  api.imply([
    'stargazing:accounts'
  ])

  api.addFiles('lib/components-list.jsx')

  api.addFiles([
    'lib/forms/register.jsx',
    'lib/forms/auth/services-signin.jsx',
    'lib/forms/auth/services-register.jsx',
    'lib/forms/auth/username-signin.jsx',
    'lib/forms/auth/username-register.jsx',
    'lib/forms/auth/auth-box.jsx'
  ])

  api.addFiles([
    'lib/layouts/app.jsx'
  ])
})
