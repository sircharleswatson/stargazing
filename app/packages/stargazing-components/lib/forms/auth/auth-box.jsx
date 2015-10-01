const {
  AuthState,
  ServicesAuth,
  UsernameAuth
} = Stargazing.Components.Forms.Auth

let AuthBox = React.createClass({
  displayName: 'AuthBox',

  getInitialState() {
    return {
      action: 'signin',
      email: '',
      password: ''
    }
  },

  getServices() {
    return [
      {name: 'Google', buttonClass: 'google plus'},
      {name: 'Facebook', buttonClass: 'facebook'},
      {name: 'Twitter', buttonClass: 'twitter'}
    ]
  },

  getTitle() {
    if (this.state.action === 'signin') {
      return 'Sign In'
    } else {
      return 'Register'
    }
  },

  handleActionChange(action) {

    $('html,body').animate({
      scrollTop: $(this.refs.authBox.getDOMNode()).offset().top
    }, 100)

    this.setState({action})
  },

  handleFormSubmit() {
    console.log('Auth Box: Handle Form Submit')
    if (this.state.action === 'signin') {
      this.userSignin()
    } else {
      this.userRegistration()
    }
  },

  handleInput(email, password) {
    this.setState({
      email: email,
      password: password
    })
  },

  userSignin() {
    Meteor.loginWithPassword(this.state.email, this.state.password, function(error) {
      console.log('Error: ', error)
    })
  },

  userRegistration() {
    console.log('User is registering')
    Accounts.createUser({
      email: this.state.email,
      password: this.state.password
    }, function(error) {
      if (!error) {
        console.log('There were no errors registering')
      }

      console.log('Error: ', error)
    })
  },

  render() {
    return (
      <div ref="authBox" className="ui centered eight wide column">
        <div className="ui form segment">
          <h2 className="ui center aligned dividing header">{this.getTitle()}</h2>
          <ServicesAuth action={this.state.action} services={this.getServices()}/>
          <div className="ui horizontal divider">OR</div>
          <UsernameAuth action={this.state.action} email={this.state.email} password={this.state.password} onInputChange={this.handleInput} onFormSubmit={this.handleFormSubmit}/>
          <AuthState action={this.state.action} onActionChange={this.handleActionChange}/>
        </div>
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.AuthBox = AuthBox
