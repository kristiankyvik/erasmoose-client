
import Autocomplete from 'react-autocomplete'
import Tag from './Tag'
import { gql, graphql } from 'react-apollo'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        taggedCountries: [],
        showFilters: false
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

  toggleFilters = () => {
    console.log("SHOWWWW FILTERSSSS")
    this.setState({showFilters: !this.state.showFilters});
  }

  getItems = (value) => {
    const regex = new RegExp(value,'ig')
    return this.props.distinctCountries
      .filter((country) => country.match(regex))
      .filter((country) => (this.state.taggedCountries.indexOf(country) == -1)).sort();
  }

  render(){
    console.log(this.state.showFilters);
    if (!this.state.showFilters) {
      return (<div className="">
        <div className="underline pointer" onClick={this.toggleFilters}>
          Show filters
        </div>
      </div>);
    }
    return (
      <div className="ph5" style={{maxWidth: 980, margin: "0 auto"}}>
        <Autocomplete
          getItemValue={(item) => item}
          items={this.getItems(this.state.value)}
          value={this.state.value}
          onSelect={this.selectCountry}
          onChange={(event, value) => { this.setState({ value }) }}
          renderInput={(props) => (
            <input 
              className='filter-input m0a' 
              placeholder='Select country'
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
        <div className="flex pt3">
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/location.svg' className="w2 h2 mr1" />
              Country 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/ranking.svg' className="w2 h2 mr1" />
              Ranking 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
               <img src='./static/icons/subject.svg' className="w2 h2 mr1" />
               Flagship Areas 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
               <img src='./static/icons/language.svg' className="w2 h2 mr1" />
               Languages 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
               <img src='./static/icons/money.svg' className="w2 h2 mr1" />
               Tuition Fees 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
               <img src='./static/icons/time.svg' className="w2 h2 mr1" />
               Weekly Hours of Work 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/difficulty.svg' className="w2 h2 mr1" />
              Difficulty
            </div>
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/globe.svg' className="w2 h2 mr1" />
              International Orientation 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/open.svg' className="w2 h2 mr1" />
              Openness 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/gender.svg' className="w2 h2 mr1" />
              Gender Ratio (Women/Men) 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/research.svg' className="w2 h2 mr1" />
              Research Opportunities 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/job.svg' className="w2 h2 mr1" />
              Job Opportunities 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/club.svg' className="w2 h2 mr1" />
              Organizations/Student Clubs 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/party.svg' className="w2 h2 mr1" />
              Student Parties 
            </div>
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/population.svg' className="w2 h2 mr1" />
              Size 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/temperature.svg' className="w2 h2 mr1" />
              Weather 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/bill.svg' className="w2 h2 mr1" />
              Monthly Cost 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/difficulty.svg' className="w2 h2 mr1" />
             Student Friendliness
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/plane.svg' className="w2 h2 mr1" />
              Travel Options
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/culture.svg' className="w2 h2 mr1" />
              Cultural Offering
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/nightlife.svg' className="w2 h2 mr1" />
              Nightlife
            </div>                   
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/gastronomy.svg' className="w2 h2 mr1" />
              Gastronomy
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/sports.svg' className="w2 h2 mr1" />
              Sports
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/rent.svg' className="w2 h2 mr1" />
              Rent
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/beer.svg' className="w2 h2 mr1" />
              Beer in a Pub
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/cafe.svg' className="w2 h2 mr1" />
              Coffee
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/burger.svg' className="w2 h2 mr1" />
              Kebab
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center">
              <img src='./static/icons/music.svg' className="w2 h2 mr1" />
              Entry fee Club
            </div>                   
          </div>
        </div>
        <div className="pv2">
          Here under is where the tags will go
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
        </div>
        <div className="underline pointer tl" onClick={this.toggleFilters}>
          Hide filters
        </div>
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


  
  
  
  
  
  