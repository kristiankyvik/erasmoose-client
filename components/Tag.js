export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  //needs designing!

  render() {
    const { removeTag, name, index } = this.props;
    return (
        <div className="pt3 di">
          <div className="tag flex flex-auto pa2 br3 justify-start items-start">
            <div className="country-div"> {name} </div>
            <div className="x pointer ml1" onClick={() => removeTag(index)}> { 'x '} </div>
          </div>
          <style jsx>
            {`
              .tag {
                background: #1EC4BC;
                border: 1px solid white;
                display: inline-flex;
                color: white;
              }
              .country-div {
                padding-right: 5px;
              }
              .x {
                color: white;
              }
              `}
          </style>
        </div>
      );
  }

}

