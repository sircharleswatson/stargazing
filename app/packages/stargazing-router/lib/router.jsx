const {Router, Route} = ReactRouter

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

const {
  App
} = Stargazing.Components.Layouts

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  ), document.body)
})
