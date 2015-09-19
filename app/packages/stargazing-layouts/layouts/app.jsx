App = React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    )
  }
})
