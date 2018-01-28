import Autocomplete from 'react-autocomplete'
import Tag from './Tag'
import { gql, graphql } from 'react-apollo'
const _ = require('lodash'); 
import classNames from 'classnames'


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

  selectDropdown = (dropdown, value, ) => {
    const newState = {};
    newState[dropdown] = value;
    this.setState(newState);
    this.props.setFilterObj(dropdown, value);
  }

  selectBooleanFilter = (name) => {
    this.props.setBooleanFilter(name);
  }

  removeTag = (o) => {
    const newState = {};
    newState[o[0]] = "";
    this.setState(newState);
    this.props.setFilterObj(o[0], "");
  }

  toggleFilters = () => {
    this.setState({showFilters: !this.state.showFilters});
  }

  getItems = (value, collection) => {
    const regex = new RegExp(value,'ig')
    if (!this.props.hasOwnProperty(collection)) {
      return [];
    }
    return this.props[collection]
      .filter((country) => country.match(regex))
      .filter((country) => (this.state.tags.indexOf(country) == -1)).sort();
  }


  render(){
    const {filterObj} = this.props;
    const tags = Object.entries(filterObj).filter((o) => o[1].length);
    if (!this.state.showFilters) {
      return (<div className="">
        <div className="underline pointer" onClick={this.toggleFilters}>
          Show filters
        </div>
      </div>);
    }
    return (
      <div className="ph5" style={{maxWidth: 1000, margin: "0 auto"}}>
        <div className="flex pt3">
          <div className="flex flex-column">
            <Autocomplete
              getItemValue={(item) => item}
              items={this.getItems(this.state.country, "distinctCountries")}
              value={this.state.country}
              onSelect={(val) => this.selectDropdown("country", val)}
              onChange={(event, country) => { this.setState({ country }) }}
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
          </div>
          <div className="flex flex-column">
            <Autocomplete
              getItemValue={(item) => item}
              items={this.getItems(this.state.language, "distinctLanguages")}
              value={this.state.language}
              onSelect={(val) => {this.selectDropdown("language", val); console.log("kjlklkjlkjkjl", val)}}
              onChange={(event, language) => { this.setState({ language }) }}
              renderInput={(props) => (
                <input 
                  className='filter-input m0a' 
                  placeholder='Select language'
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
          </div>
          <div className="flex flex-column">
            <Autocomplete
              getItemValue={(item) => item}
              items={this.getItems(this.state.area, "distinctAreas")}
              value={this.state.area}
              onSelect={(val) => this.selectDropdown("area", val)}
              onChange={(event, area) => { this.setState({ area }) }}
              renderInput={(props) => (
                <input 
                  className='filter-input m0a' 
                  placeholder='Select area'
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
          </div>
        </div>
        <div className="flex pt3">
          <div className="flex flex-auto flex-column">
            <div className={this.props.filterObj["uniRating"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("uniRating")}>
              <img src='./static/icons/ranking.svg' className={"w2 h2 mr1"} />
              Ranking 
            </div>
            <div className={this.props.filterObj["uni_cheapness"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("uni_cheapness")}>
               <img src='./static/icons/money.svg' className={"w2 h2 mr1"} />
               Low Tuition Fees 
            </div>
            <div className={this.props.filterObj["free_time"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("free_time")}>
               <img src='./static/icons/time.svg' className={"w2 h2 mr1"} />
               Free Time 
            </div>
            <div className={this.props.filterObj["easiness"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("easiness")}>
              <img src='./static/icons/difficulty.svg' className={"w2 h2 mr1"} />
              Easy Courses
            </div>
            <div className={this.props.filterObj["int_orientation"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("int_orientation")}>
              <img src='./static/icons/globe.svg' className={"w2 h2 mr1"} />
              International Orientation 
            </div>
          </div>
           <div className="flex flex-auto flex-column">
             <div className={this.props.filterObj["openness"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("openness")}>
               <img src='./static/icons/open.svg' className={"w2 h2 mr1"} />
               Openness 
             </div>
             <div className={this.props.filterObj["female_percentage"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("female_percentage")}>
               <img src='./static/icons/gender.svg' className={"w2 h2 mr1"} />
               Gender Ratio (Women/Men) 
             </div>
             <div className={this.props.filterObj["opportunities"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("opportunities")}>
               <img src='./static/icons/job.svg' className={"w2 h2 mr1"} />
               Research/Job Opportunities 
             </div>
             <div className={this.props.filterObj["clubs"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("clubs")}>
               <img src='./static/icons/club.svg' className={"w2 h2 mr1"} />
               Organizations/Student Clubs 
             </div>
             <div className={this.props.filterObj["party"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("party")}>
               <img src='./static/icons/party.svg' className={"w2 h2 mr1"} />
               Student Parties 
             </div>
           </div>
           <div className="flex flex-auto flex-column">
             <div className={this.props.filterObj[""] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("")}>
               <img src='./static/icons/population.svg' className={"w2 h2 mr1"} />
               Size 
             </div>
             <div className={this.props.filterObj[""] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("")}>
               <img src='./static/icons/temperature.svg' className={"w2 h2 mr1"} />
               Weather 
             </div>
             <div className={this.props.filterObj["monthly_cost"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("monthly_cost")}>
               <img src='./static/icons/bill.svg' className={"w2 h2 mr1"} />
               Monthly Cost 
             </div>
             <div className={this.props.filterObj["student_friendliness"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("student_friendliness")}>
               <img src='./static/icons/difficulty.svg' className={"w2 h2 mr1"} />
              Student Friendliness
             </div>
             <div className={this.props.filterObj["travel_options"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("travel_options")}>
               <img src='./static/icons/plane.svg' className={"w2 h2 mr1"} />
               Travel Options
             </div>
           </div>
           <div className="flex flex-auto flex-column">
             <div className={this.props.filterObj["culture"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("culture")}>
               <img src='./static/icons/culture.svg' className={"w2 h2 mr1"} />
               Cultural Offering
             </div>
             <div className={this.props.filterObj["nightlife"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("nightlife")}>
               <img src='./static/icons/nightlife.svg' className={"w2 h2 mr1"} />
               Nightlife
             </div>                   
             <div className={this.props.filterObj["gastronomy"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("gastronomy")}>
               <img src='./static/icons/gastronomy.svg' className={"w2 h2 mr1"} />
               Gastronomy
             </div>
             <div className={this.props.filterObj["sports"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("sports")}>
               <img src='./static/icons/sports.svg' className="w2 h2 mr1" />
               Sports
             </div>
             <div className={this.props.filterObj["city_cheapness"] ? "selected flex icon-wrapper br-100 pa1 pointer items-center" : "flex icon-wrapper br-100 pa1 pointer items-center"} onClick={() => this.selectBooleanFilter("city_cheapness")}>
               <img src='./static/icons/rent.svg' className="w2 h2 mr1" />
               Cheap Cost of Life
             </div>                 
           </div>
         </div>
        <div className="pv3 tl">
          {tags.map((o, index) =>
            <Tag
              key={o[1]}
              name={o[1]}
              index={index}
              removeTag={() => this.removeTag(o)}
            />
          )}
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
            .selected img {
              background-color: paleturquoise;
              border-radius: 40%;
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
  