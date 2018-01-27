import Autocomplete from 'react-autocomplete'

export default class Autocomp extends React.Component {
  constructor(props) {
    super(props);
  }

  getItems = (value, collection, tags) => {
    const regex = new RegExp(value, 'ig')
    return collection
      .filter((item) => item.match(regex))
      .filter((item) => (tags.indexOf(item) == -1)).sort();
  }

  render() {
    const { value, name, setState, selectDropdown, collection, tags } = this.props;
    return (
      <div className="flex flex-column">
        <Autocomplete
          getItemValue={(item) => item}
          items={this.getItems(value, collection, tags)}
          value={value}
          onSelect={(val) => selectDropdown(name, val)}
          onChange={(event, item) => { setState({ item }) }}
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
