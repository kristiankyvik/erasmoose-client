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
          href={`/review?id=${null}`}
          target="_blank">
            Add review
        </a> 
      </div>
    )
  }
}

export default TypeformButton;