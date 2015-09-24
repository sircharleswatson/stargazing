Package.describe({
  name: 'stargazing:styles',
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
  api.versionsFrom('1.2')

  api.use([
    'ecmascript',
    'flemay:less-autoprefixer@1.1.0',
    'semantic:ui@2.1.4'
  ])

  // var clientThemeFiles = getFilesFromFolder('stargazing-styles', 'client/lib/semantic-ui/themes')
  // api.addFiles(clientThemeFiles, 'client')

  var clientDefinitionFiles = getFilesFromFolder('stargazing-styles', 'client/lib/semantic-ui/definitions')
  api.addFiles(clientDefinitionFiles, 'client')

  var clientSiteFiles = getFilesFromFolder('stargazing-styles', 'client/lib/semantic-ui/site')
  api.addFiles(clientSiteFiles, 'client')

  api.addFiles('client/lib/semantic-ui/semantic.less', 'client')
  api.addFiles('client/lib/semantic-ui/theme.config.import.less', 'client')
  api.addFiles('client/lib/semantic-ui/theme.import.less', 'client')

})


/**
* Helper Method
*
* Walks recursively inside nested folders and returns absolute filenames
*/


var _ = Npm.require('underscore')
var fs = Npm.require('fs')
var path = Npm.require('path')

// var myFunc = eval(fs.readFile('packages/stargazing-styles/test.js'))


function getFilesFromFolder(packageName,folder){

  var cwd=process.cwd()

  process.chdir('packages'+path.sep+packageName)

  var result=walk(folder)

  process.chdir(cwd)

  return result
}

function walk(folder){
  var filenames=[]

  var folderContent=fs.readdirSync(folder)

  _.each(folderContent,function(filename){

    var absoluteFilename=folder+path.sep+filename
    var stat=fs.statSync(absoluteFilename)

    if(stat.isDirectory()){
      filenames=filenames.concat(walk(absoluteFilename))
    } else{
      filenames.push(absoluteFilename)
    }

  })

  return filenames
}
