const {
  UsernameSignin
} = Stargazing.Components.Forms.Auth
console.log(UsernameSignin)
let AuthBox = React.createClass({
  displayName: 'AuthBox',

  getInitialState() {
    return {
      action: 'signin'
    }
  },

  showServices() {
    if (this.state.action === 'signin') {
      return (
        <ServicesSignin />
      )
    } else {
      return (
        <ServicesRegister />
      )
    }
  },

  showForm() {
    if (this.state.action === 'signin') {
      return (
        <UsernameSignin />
      )
    } else {
      return (
        <UsernameRegister />
      )
    }
  },

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <p>------------</p>
        {this.showServices()}
        <p>-----or-----</p>
        {this.showForm()}
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.AuthBox = AuthBox
