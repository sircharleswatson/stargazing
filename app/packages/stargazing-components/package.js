Package.describe({
  name: "stargazing:components",
  version: "0.0.0",
  // Brief, one-line summary of the package.
  summary: ""
})

Package.onUse(function(api) {
  api.versionsFrom("1.2")
  api.use([
    "stargazing:lib",
    "react",
    "accounts-base",
    "accounts-password",
    "accounts-google",
    "accounts-twitter",
    "accounts-facebook",
    "service-configuration"
  ])

  setTimeout(function() {
    packageFolder("stargazing-components", api)

    addFiles("lib/components-list.jsx")
    addFiles("lib/forms/**/!(auth-box|username-auth|services-auth).jsx")
    addFiles("lib/forms/**/username-auth.jsx")
    addFiles("lib/forms/**/services-auth.jsx")
    addFiles("lib/forms/**/auth-box.jsx")
    addFiles("lib/layouts/**.*")
    addFiles("service-config.js", "server")
  }, 100)
})
