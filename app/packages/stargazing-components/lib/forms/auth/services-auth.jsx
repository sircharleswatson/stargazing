const {
  ServicesSignin,
  ServicesRegister
} = Stargazing.Components.Forms.Auth

let ServicesAuth = React.createClass({
  displayName: "Services Auth",

  propTypes: {
    action: React.PropTypes.string,
    onServiceClick: React.PropTypes.func,
    services: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      buttonClass: React.PropTypes.string
    }))
  },

  showButtons() {
    if (this.props.action === "signin") {
      return <ServicesSignin services={this.props.services} onServiceClick={this.props.onServiceClick} />
    } else {
      return <ServicesRegister services={this.props.services} onServiceClick={this.props.onServiceClick}/>
    }
  },

  render() {
    return (
      <div>
        {this.showButtons()}
      </div>
    )
  }
})

Stargazing.Components.Forms.Auth.ServicesAuth = ServicesAuth