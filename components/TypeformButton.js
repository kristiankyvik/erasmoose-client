class TypeformButton extends React.Component {
  constructor(props) {
    super(props);
    this.btn = null;
  }

  launchForm() {
    this.btn.click();
  }

  render() {
    return (
      <div className={this.props.ghost ? "clip" : ""}>
        <a 
          ref={(el) => { this.btn = el; }}
          className="typeform-share button ur-btn mv3" 
          href={`https://kyvikbcn.typeform.com/to/FsuJQm?id=${this.props.uniId}`}
          data-mode="drawer_right" 
          target="_blank">
            Add review
        </a> 
      </div>
    )
  }
}

export default TypeformButton;