let AuthState = React.createClass({
  displayName: "Auth State",

  propTypes: {
    action: React.PropTypes.string,
    onActionChange: React.PropTypes.func
  },

  changeAction(newAction, event) {
    event.preventDefault()
    this.props.onActionChange(newAction)
  },

  getActionLink() {
    if (this.props.action === "signin") {
      return (
        <p>
          {"Don't have an account? "}
          <a href="#" onClick={this.changeAction.bind(this, "register")}>Register</a>
        </p>
      )
    } else {
      return (
        <p>
          {"Already have an account? "}
          <a href="#" onClick={this.changeAction.bind(this, "signin")}>Sign In</a>
        </p>
      )
    }
  },

  render() {
    return (
      <div className="ui basic center aligned segment">
        {this.getActionLink()}
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.AuthState = AuthState