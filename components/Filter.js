
import Autocomplete from 'react-autocomplete'
import Tag from './Tag'
import { gql, graphql } from 'react-apollo'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        taggedCountries: []
    };
  }

  selectCountry = (value) => {
    this.setState({value: ''});
    let taggedCountries = this.state.taggedCountries;
    taggedCountries.push(value);

    this.setState({ taggedCountries });
    this.props.setFilterObj(this.state.taggedCountries);
  }

  removeTag = (index) => {
    let countries = this.state.taggedCountries;

    countries.splice(index, 1);
    this.setState({ taggedCountries: countries});
    this.props.setFilterObj(this.state.taggedCountries);
  }

  getItems = (value) => {
    const regex = new RegExp(value,'ig')
    return this.props.distinctCountries
      .filter((country) => country.match(regex))
      .filter((country) => (this.state.taggedCountries.indexOf(country) == -1)).sort();
  }

  render(){
    return(
      <div>
        <div>
          {this.state.taggedCountries.length === 0 ? 'Show all countries' : ''}
        </div>
        <div>
          {this.state.taggedCountries.map((country, index) =>
            <Tag
              key={country}
              country={country}
              index={index}
              removeTag={this.removeTag}
            />
          )}
        </div>
        <Autocomplete
          getItemValue={(item) => item}
          items={this.getItems(this.state.value)}
          value={this.state.value}
          onSelect={this.selectCountry}
          onChange={(event, value) => { this.setState({ value }) }}
          renderInput={(props) => (
            <input 
              className='filter-input m0a' 
              placeholder='Filter by country...'
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
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
        />
        <style jsx>
          {`
            .filter-input {
              display: inline-block;
              max-width: 500px;
              width: 90%;
              border-color: #eee;
              padding: .5em .55em;
              font-size: 1.45em;
              font-family: "Avenir Next W01", "Avenir Next", "Avenir", helvetica, arial, sans-serif;
              color: #333;
              border: 0.25em solid #eee;
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
          `}
        </style>
      </div>
    );
  }
}

const countryList = gql`
  query {
    distinctCountries
  }
`

export default graphql(countryList, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: ({ data: { distinctCountries}}) => ({distinctCountries})
})(Filter);


  
  
  
  
  
  