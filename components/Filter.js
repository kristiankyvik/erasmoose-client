
import Autocomplete from 'react-autocomplete'
import Tag from './Tag'

const countries = [ //could be replaced by graphql call in the future
  'Albania',
  'Andorra',
  'Armenia',
  'Austria',
  'Azerbaijan',
  'Belarus',
  'Belgium',
  'Bosnia and Herzegovina',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Georgia',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Kazakhstan',
  'Kosovo',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Malta',
  'Moldova',
  'Monaco',
  'Montenegro',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'San Marino',
  'Serbia',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Turkey',
  'Ukraine',
  'United Kingdom',
  'Vatican'
];

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        countries: countries,
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

  removeCountry = (e) => {
    const value = e.target.innerHTML;
    let countries = this.state.taggedCountries;

    countries.splice(countries.indexOf(value), 1);
    this.setState({ taggedCountries: countries});
    this.props.setFilterObj(this.state.taggedCountries);
  }

  getItems = (value) => {
    const regex = new RegExp(value,'ig')
    return this.state.countries.filter((country) => country.match(regex));
  }

  render(){
    return(
      <div>
        <div>
          {this.state.taggedCountries.length === 0 ? 'Show all countries' : ''}
        </div>
        <div>
          {this.state.taggedCountries.map((country) =>
            <Tag
              key={country}
              country={country}
              onClick={this.removeCountry}
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


  
  
  
  
  
  