let UsernameRegister = React.createClass({
  displayName: "Username Register",

  propTypes: {
    email: React.PropTypes.string,
    onFormSubmit: React.PropTypes.func,
    onInputChange: React.PropTypes.func,
    password: React.PropTypes.string
  },

  handleChange() {
    this.props.onInputChange(
      this.refs.email.getDOMNode().value,
      this.refs.password.getDOMNode().value
    )
  },

  handleSubmit(event) {
    event.preventDefault()
    console.log("Will pass the register submit message to the parent")
    this.props.onFormSubmit()
  },

  emailInput() {
    return (
      <div className="required field">
        <div className="ui left corner labeled input">
          <input type="email" placeholder="Email" ref="email" onChange={this.handleChange}
              value={this.props.email} />
          <div className="ui left corner label">
          <i className="asterisk icon"></i>
          </div>
        </div>
      </div>
    )
  },

  passwordInput() {
    return (
      <div className="required field">
        <div className="ui left corner labeled input">
          <input type="password" placeholder="Password" ref="password" onChange={this.handleChange}
              value={this.props.password} />
          <div className="ui left corner label">
          <i className="asterisk icon"></i>
          </div>
        </div>
      </div>
    )
  },

  render() {
    return (
      <form id="login-form" className="ui form"
          onSubmit={this.handleSubmit}>
        {this.emailInput()}
        {this.passwordInput()}
        <button type="submit" className="ui fluid button">
          Register
        </button>
      </form>
    )
  }
})

Stargazing.Components.Forms.Auth.UsernameRegister = UsernameRegister
