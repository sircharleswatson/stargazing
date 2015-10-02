let UsernameSignin = React.createClass({
  displayName: "Username Signin",

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

    console.log("Will pass the signin submit message to the parent")
    this.props.onFormSubmit()
  },

  render() {
    return (
      <form id="login-form" className="ui form"
          onSubmit={this.handleSubmit}>
        <div className="required field">
          <div className="ui left corner labeled input">
            <input type="email" placeholder="Email" ref="email" onChange={this.handleChange}
                value={this.props.email} />
            <div className="ui left corner label">
            <i className="asterisk icon"></i>
            </div>
          </div>
        </div>
        <div className="required field">
          <div className="ui left corner labeled input">
            <input type="password" placeholder="Password" ref="password" onChange={this.handleChange}
                value={this.props.password} />
            <div className="ui left corner label">
            <i className="asterisk icon"></i>
            </div>
          </div>
        </div>

        <button type="submit" ref="login-button" id="login-button" className="ui fluid button">
          Sign in
        </button>
      </form>
    )
  }
})

Stargazing.Components.Forms.Auth.UsernameSignin = UsernameSignin
