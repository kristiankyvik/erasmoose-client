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
      <div className="clip">
        <a 
          ref={(el) => { this.btn = el; }}
          className="typeform-share button ur-btn mv3" 
          href={`https://kyvikbcn.typeform.com/to/FsuJQm?uniId=${this.props.uniId}`}
          data-mode="drawer_right" 
          target="_blank">
            Add review
        </a> 
        <style jsx>{`
        `}</style>
      </div>
    )
  }
}

export default TypeformButton;