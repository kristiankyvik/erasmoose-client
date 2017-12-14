export default class ModalInfoDiv extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { name, divProperty, srcName} = this.props;
    return (
      <div className="flex items-stretch pv1">
        <div className="flex items-center justify-center">
          <div className="flex icon-wrapper br-100 pa1 items-center justify-center">
            <img src={srcName} className="w2 h2" />
          </div>
        </div>
        <div className="flex flex-column self-stretch flex-1 justify-center pl2">
          <div className="flex pb1 justify-between">
            <div className="flex">
              {name}
            </div>
          </div>
          <span className="f7 ttu b">{divProperty}</span>
        </div>
      </div>
    );
  }
}
