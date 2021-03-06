import Router from 'next/router';

class TypeformButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.ghost ? "clip" : ""} >
        <a 
          className="button ur-btn mt3 mv1" 
          href={`/review${ this.props.id ? `?id=${this.props.id}&cityid=${this.props.cityid}` : ''}`}
          target="_blank">
            Add review
        </a> 
      </div>
    )
  }
}

export default TypeformButton;