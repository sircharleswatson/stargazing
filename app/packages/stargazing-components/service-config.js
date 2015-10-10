// ServiceConfiguration.configurations.upsert(
//   {service: "google"},
//   {
//     $set: {
//       clientId: Meteor.settings.googleAuth.clientId,
//       loginStyle: "popup",
//       secret: Meteor.settings.googleAuth.clientSecret
//     }
//   }
// )

// ServiceConfiguration.configurations.upsert(
//   {service: "twitter"},
//   {
//     $set: {
//       consumerKey: Meteor.settings.twitterAuth.clientId,
//       loginStyle: "popup",
//       secret: Meteor.settings.twitterAuth.clientSecret
//     }
//   }
// )

// ServiceConfiguration.configurations.remove({
//   service: "facebook"
// })
 
// ServiceConfiguration.configurations.insert({
//   service: "facebook",
//   appId: Meteor.settings.facebookAuth.appId,
//   secret: Meteor.settings.facebookAuth.secret
// })