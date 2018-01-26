export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  //needs designing!

  render() {
    const { removeTag, name, index } = this.props;
    return (
        <div>
        <div className="tag flex flex-auto">
          <div className="country-div"> {name} </div>
          <div className="x" onClick={() => removeTag(index)}> { 'x '} </div>
          </div>
          <style jsx>
            {`
              .tag {
                background: #ddd;
                border: 1px solid #ccc;
                display: inline-flex;
              }
              .country-div {
                padding-right: 5px;
              }
              .x {
                color: red;
              }
              `}
          </style>
        </div>
      );
  }

}

