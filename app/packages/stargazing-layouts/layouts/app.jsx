App = React.createClass({
  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    );
  }
});
