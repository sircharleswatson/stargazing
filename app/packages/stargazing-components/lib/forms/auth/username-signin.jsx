let UsernameSignin = React.createClass({
  displayName: 'Username Signin',

  getInitialState() {
    return {
      emailInput: '',
      passwordInput: ''
    }
  },

  handleChange(e) {
    var newState = {}
    newState[e.target.id] = e.target.value

    // this.setState(newState)
  },

  handleSubmit(event) {
    event.preventDefault()

    // retrieve the input field values
    let {
      emailInput,
      passwordInput
    } = this.state

    check(emailInput, String)
    check(passwordInput, String)

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(emailInput, passwordInput, (err) => {
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        console.log('Login attempt failed')
      }

      console.log('after login')

      // this.setState({
      //   emailInput: '',
      //   passwordInput: ''
      // }, function() {
      //   React.findDOMNode(this.refs.email).focus()
      // })
    })

  },

  render() {
    return (
      <form id="login-form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
        <div>
          <input type="email" ref="email" id="emailInput"
              value={this.state.emailInput} />
          <input type="password" ref="password" id="passwordInput"
              value={this.state.passwordInput} />
          <input type="submit" ref="login-button" id="login-button" value="Sign in" />
        </div>
      </form>
    )
  }
})

Stargazing.Components.Forms.UsernameSignin = UsernameSignin
