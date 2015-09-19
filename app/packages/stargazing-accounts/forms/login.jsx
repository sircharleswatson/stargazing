AccountForms['LoginForm'] = React.createClass({
  displayName: 'Login Form',

  handleSubmit(event) {
    event.preventDefault()
    // retrieve the input field values
    var email = React.findDOMNode(this.refs.email).value.trim()
    var password = React.findDOMNode(this.refs.password).value.trim()

    // Trim and validate your fields here....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        console.log('No user found')
      } else {
        // The user has been logged in.
      }
    })

  },

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="email" ref="email" id="login-email" />
          <input type="password" ref="password" id="login-password" />
          <input type="submit" ref="login-button" id="login-button" value="Sign in" />
        </div>
      </form>
    )
  }
})
