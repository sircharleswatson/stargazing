const { AuthBox } = Stargazing.Components.Forms.Auth

App = React.createClass({ displayName: 'App',
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUserId: Meteor.userId(),
      loggingIn: Meteor.loggingIn()
    }
  },

  showForm() {
    if (this.data.loggingIn) {
      return <p>Loading...</p>
    }

    if (!this.data.currentUserId) {
      return <AuthBox />
    }

    return <p>Logged In</p>
  },

  render() {
    return (
      <div className="main-container">
        <main className="ui three column stackable page grid">
          {this.showForm()}
        </main>
      </div>
    )
  }
})

Stargazing.Components.Layouts.App = App
