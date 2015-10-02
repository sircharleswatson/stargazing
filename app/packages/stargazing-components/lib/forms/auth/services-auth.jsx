const {
  ServicesSignin,
  ServicesRegister
} = Stargazing.Components.Forms.Auth

let ServicesAuth = React.createClass({
  displayName: "Services Auth",

  propTypes: {
    action: React.PropTypes.string,
    services: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      buttonClass: React.PropTypes.string
    }))
  },

  showButtons() {
    if (this.props.action === "signin") {
      return <ServicesSignin services={this.props.services}/>
    } else {
      return <ServicesRegister services={this.props.services}/>
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