export default class FilterIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive
    };
  }

  applyItemToRanking = (a) => {
    this.setState({isActive: !this.state.isActive});
    if(this.props.setRanking){
      this.props.setRanking(this.props.dataAttrib);
    }
  }

  render() {
    const { name, dataAttrib, iconPath } = this.props;
    return (
      <div className='flex icon-wrapper br-100 pa1 pointer items-center' data-attrib={dataAttrib}>
        <img src={'./static/icons/' + iconPath + '.svg'} className={this.state.isActive ? 'w2 h2 mr1 bg' : 'w2 h2 mr1'} onClick={this.applyItemToRanking} />
        {name}
        <style jsx>
          {`
            .bg {
              background-color: paleturquoise;
              border-radius: 40%;
            }
          `}
        </style>
      </div>
    );
  }
}
