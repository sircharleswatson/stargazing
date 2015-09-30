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

  setTimeout(function() {
    packageFolder('stargazing-components', api)

    addFiles('lib/components-list.jsx')
    addFiles('lib/forms/**/!(auth-box).jsx')
    addFiles('lib/forms/**/auth-box.jsx')
    addFiles('lib/layouts/**.*')
  }, 500)
})
