const {
  UsernameSignin,
  UsernameRegister
} = Stargazing.Components.Forms.Auth

let UsernameAuth = React.createClass({
  displayName: 'Username Auth',

  showForm() {
    if (this.props.action === 'signin') {
      return (
        <UsernameSignin 
            email={this.props.email} 
            password={this.props.password} 
            onInputChange={this.props.onInputChange}
            onFormSubmit={this.props.onFormSubmit}/>
      )
    } else {
      return (
        <UsernameRegister 
            email={this.props.email} 
            password={this.props.password} 
            onInputChange={this.props.onInputChange}
            onFormSubmit={this.props.onFormSubmit}/>
      )
    }
  },

  render() {
    return (
      <div>
        {this.showForm()}
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.UsernameAuth = UsernameAuth