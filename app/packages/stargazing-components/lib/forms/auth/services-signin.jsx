ServicesSignin = React.createClass({
  displayName: "Services Signin",

  propTypes: {
    services: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      buttonClass: React.PropTypes.string
    }))
  },

  renderServiceButtons() {
    return this.props.services.map((service, i) => {
      return (
        <button key={i} className={`ui fluid labeled icon ${service.buttonClass} large button field`}>
          <i key={i} className={`${service.buttonClass} icon`} />
          Sign in with {service.name}
        </button>
      )
    })
  },

  render() {
    return (
      <div>
        {this.renderServiceButtons()}
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.ServicesSignin = ServicesSignin
