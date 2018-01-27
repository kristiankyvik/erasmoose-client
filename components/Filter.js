import Tag from './Tag'
import Autocomp from './Autocomp'
import { gql, graphql } from 'react-apollo'
const _ = require('lodash'); 

const remove = (array, element) => {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        language: '',
        country: '',
        area: '',
        tags: [],
        showFilters: true
    };
  }

  selectDropdown = (dropdown, value) => {
    const newState = {};
    newState[dropdown] = value;
    this.setState(newState);
    this.props.setFilterObj(dropdown, value);
  }

  removeTag = (o) => {
    console.log("removeTag", o);
    const newState = {};
    newState[o[0]] = "";
    this.setState(newState);
    this.props.setFilterObj(o[0], "");
  }

  toggleFilters = () => {
    this.setState({showFilters: !this.state.showFilters});
  }

  render(){
    const {filterObj} = this.props;
    const tags = Object.entries(filterObj).filter((o) => o[1].length);
    console.log("hallo", this.props);
    if (!this.state.showFilters) {
      return (<div className="">
        <div className="underline pointer" onClick={this.toggleFilters}>
          Show filters
        </div>
      </div>);
    }
    return (
      <div className="ph5" style={{maxWidth: 980, margin: "0 auto"}}>
        <div className="flex pt3">
          <Autocomp
            value={this.state.country}
            name='country'
            setState={this.setState}
            selectDropdown={this.selectDropdown}
            collection={this.props.distinctCountries}
            tags={this.state.tags}
          />
          <Autocomp
            value={this.state.area}
            name='area'
            setState={this.setState}
            selectDropdown={this.selectDropdown}
            collection={this.props.distinctAreas}
            tags={this.state.tags}
          />
          <Autocomp
            value={this.state.language}
            name='language'
            setState={this.setState}
            selectDropdown={this.selectDropdown}
            collection={this.props.distinctLanguages}
            tags={this.state.tags}
          />
        </div>
        <div className="flex pt3">
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="country">
              <img src='./static/icons/location.svg' className="w2 h2 mr1" />
              Country 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="uniRating">
              <img src='./static/icons/ranking.svg' className="w2 h2 mr1" />
              Ranking 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="main_disciplines">
               <img src='./static/icons/subject.svg' className="w2 h2 mr1" />
               Flagship Areas 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="Languages">
               <img src='./static/icons/language.svg' className="w2 h2 mr1" />
               Languages 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="fees">
               <img src='./static/icons/money.svg' className="w2 h2 mr1" />
               Tuition Fees 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="weekly_hours">
               <img src='./static/icons/time.svg' className="w2 h2 mr1" />
               Weekly Hours of Work 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="difficulty">
              <img src='./static/icons/difficulty.svg' className="w2 h2 mr1" />
              Difficulty
            </div>
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="int_orientation">
              <img src='./static/icons/globe.svg' className="w2 h2 mr1" />
              International Orientation 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="openness">
              <img src='./static/icons/open.svg' className="w2 h2 mr1" />
              Openness 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="female_percentage">
              <img src='./static/icons/gender.svg' className="w2 h2 mr1" />
              Gender Ratio (Women/Men) 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="opportunities">
              <img src='./static/icons/research.svg' className="w2 h2 mr1" />
              Research Opportunities 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="opportunities">
              <img src='./static/icons/job.svg' className="w2 h2 mr1" />
              Job Opportunities 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="clubs">
              <img src='./static/icons/club.svg' className="w2 h2 mr1" />
              Organizations/Student Clubs 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="party">
              <img src='./static/icons/party.svg' className="w2 h2 mr1" />
              Student Parties 
            </div>
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="">
              <img src='./static/icons/population.svg' className="w2 h2 mr1" />
              Size 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="">
              <img src='./static/icons/temperature.svg' className="w2 h2 mr1" />
              Weather 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="monthly_cost">
              <img src='./static/icons/bill.svg' className="w2 h2 mr1" />
              Monthly Cost 
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="student_friendliness">
              <img src='./static/icons/difficulty.svg' className="w2 h2 mr1" />
             Student Friendliness
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="travel_options">
              <img src='./static/icons/plane.svg' className="w2 h2 mr1" />
              Travel Options
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="culture">
              <img src='./static/icons/culture.svg' className="w2 h2 mr1" />
              Cultural Offering
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="nightlife">
              <img src='./static/icons/nightlife.svg' className="w2 h2 mr1" />
              Nightlife
            </div>                   
          </div>
          <div className="flex flex-auto flex-column">
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="gastronomy">
              <img src='./static/icons/gastronomy.svg' className="w2 h2 mr1" />
              Gastronomy
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="sports">
              <img src='./static/icons/sports.svg' className="w2 h2 mr1" />
              Sports
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="rent_cost">
              <img src='./static/icons/rent.svg' className="w2 h2 mr1" />
              Rent
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="beer_cost">
              <img src='./static/icons/beer.svg' className="w2 h2 mr1" />
              Beer in a Pub
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="coffee_cost">
              <img src='./static/icons/cafe.svg' className="w2 h2 mr1" />
              Coffee
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="kebab_cost">
              <img src='./static/icons/burger.svg' className="w2 h2 mr1" />
              Kebab
            </div>
            <div className="flex icon-wrapper br-100 pa1 pointer items-center" data-attrib="danceclub_cost">
              <img src='./static/icons/music.svg' className="w2 h2 mr1" />
              Entry fee Club
            </div>                   
          </div>
        </div>
        <div className="pv2">
          Here under is where the tags will go
          <div>
            {tags.map((o, index) =>
              <Tag
                key={o[1]}
                name={o[1]}
                index={index}
                removeTag={() => this.removeTag(o)}
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

const dropdownValues = gql`
  query {
    distinctCountries
    distinctLanguages
    distinctAreas
  }
`

export default graphql(dropdownValues, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: (props) => props.data
})(Filter);


  
  
  
  
  
  