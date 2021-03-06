import Autocomplete from 'react-autocomplete'

export default class Autocomp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      name: this.props.name,
      setCollectionState: (value) => {this.props.setCollectionState(this.state.name, value)},
      setFilterObj: (value) => {this.props.setFilterObj(this.state.name, value)}
    }
  }

  getItems = (value, collection, tags) => {
    const regex = new RegExp(value, 'ig')
    return collection
      .filter((item) => item.match(regex))
      .filter((item) => (tags.map((tag) => tag[1]).indexOf(item) == -1)).sort();
  }

  setValueToState = (e, value) => {
    this.state.setCollectionState(value);  
  }

  selectDropdown = (value) => {
    this.props.setFilterObj(this.state.name, value);
    this.state.setCollectionState('');  
  }

  render() {
    const { value, name, collection, tags } = this.props;
    return (
      <div className="flex flex-column">
        <Autocomplete
          getItemValue={(item) => item}
          items={this.getItems(value, collection, tags)}
          value={value}
          onSelect={this.selectDropdown}
          onChange={this.setValueToState}
          renderInput={(props) => (
            <input
              className='filter-input m0a'
              placeholder={'Select ' + name}
              {...props}
            />
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item}
            >{item}</div>
          )}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          wrapperStyle={{ textAlign: 'left' }}
        />
        <style jsx>
          {`
            .filter-input {
              max-width: 250px;
              width: 80%;
              border-color: #eee;
              padding: .5em .55em;
              font-size: 1.25em;
              font-family: "Avenir Next W01", "Avenir Next", "Avenir", helvetica, arial, sans-serif;
              color: #333;
              border: 1px solid #eee;
              border-radius: 0.5em;
              background: white;
              box-sizing: border-box;
              -webkit-appearance: none;
              -webkit-tap-highlight-color: transparent;
            }
            .filter-input:focus {
              border-color: #22BAD9;
              outline-width: 0;
            }
            .m0a {
              margin: 0 auto;
              margin-top: 20px;
            }
            .menu {
              position: absolute;
              background: white;
              left:65px;
              z-index: 3;
              font-size: 18px;
              cursor: pointer;
              width: 250px;
            }
          `}
        </style>
      </div> 
    );
  }
}
