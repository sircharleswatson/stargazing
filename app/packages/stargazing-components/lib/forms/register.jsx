Register = React.createClass({
  displayName: 'Register Form',

  handleSubmit(event) {
    event.preventDefault()
    // retrieve the input field values
    var email = React.findDOMNode(this.refs.email).value.trim()
    var password = React.findDOMNode(this.refs.password).value.trim()

    // Trim and validate your fields here....
    console.log()
    Accounts.createUser({email: email, password : password}, function(err) {
      if (err) {
        // Inform the user that account creation failed
        console.log('account creation failed')
      } else {
        // Success. Account has been created and the user
        // has logged in successfully.
        console.log('user logged in')
      }

    })
  },

  render() {
    return (
      <form id="register-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="email" ref="email" id="account-email" />
          <input type="password" ref="password" id="account-password" />
          <input type="submit" ref="create-account" id="create-account" value="Create an Account" />
        </div>
      </form>
    )
  }
})

Stargazing.Components.Forms.Register = Register
