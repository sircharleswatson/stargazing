Package.describe({
  name: "stargazing:styles",
  version: "0.0.0",
  // Brief, one-line summary of the package.
  summary: "",
  // URL to the Git repository containing the source code for this package.
  git: "",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
})

Package.onUse(function(api) {
  api.versionsFrom("1.2")

  api.use([
    "ecmascript",
    "less",
    "semantic:ui-charles@2.1.4",
    "semantic:ui-icon@2.1.4"
  ])

  setTimeout(function() {
    packageFolder("stargazing-styles", api)

    addFiles("client/lib/semantic-ui/themes/**/*.*", "client")
    addFiles("client/lib/semantic-ui/+(definitions|site)/**/*.*", "client")
    addFiles("client/lib/semantic-ui/!(definitions|site|themes)", "client")
  }, 100)

})
