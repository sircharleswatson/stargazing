const { Auth } = Stargazing.Utils

App = React.createClass({ displayName: 'App',
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      loggedIn: Auth.loggedIn()
    }
  },

  showForm() {
    if (this.data.currentUser) {
      return <p>Logged In</p>
    }

    return <AuthBox />
  },

  render() {
    return (
      <div>
        <main>
          {this.showForm()}
        </main>
      </div>
    )
  }
})

Stargazing.Components.Layouts.App = App
