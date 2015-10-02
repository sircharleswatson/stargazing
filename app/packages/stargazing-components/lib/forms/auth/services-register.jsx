ServicesRegister = React.createClass({
  displayName: "Services Register",

  propTypes: {
    onServiceClick: React.PropTypes.func,
    services: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      buttonClass: React.PropTypes.string
    }))
  },

  handleClick(serviceName) {
    this.props.onServiceClick(serviceName)
  },

  renderServiceButtons() {
    return this.props.services.map((service, i) => {
      return (
        <button key={i} className={`ui fluid labeled icon ${service.buttonClass} large button field`}
            onClick={this.handleClick.bind(this, service.name)}>
          <i key={i} className={`${service.buttonClass} icon`} />
          Register with {service.name}
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

Stargazing.Components.Forms.Auth.ServicesRegister = ServicesRegister
