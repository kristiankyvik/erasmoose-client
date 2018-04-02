import Tag from './Tag'
import Autocomp from './Autocomp'
import FilterIcon from './FilterIcon'
import { gql, graphql } from 'react-apollo'
const _ = require('lodash');

const { defaultRankingUni, defaultRankingCity } = require('./UniListQueryUtils');

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
        showFilters: true,
        rankingUni: defaultRankingUni,
        rankingCity: defaultRankingCity
    };
  }

  setRanking = (nameWrapper, ranking) => {
    const idx = _.get(this, 'state.' + ranking).indexOf(nameWrapper);
    let rankingUpdate = _.get(this, 'state.' + ranking);

    if (idx > -1) {
      rankingUpdate.splice(idx, 1);
    } else {
      rankingUpdate.push(nameWrapper);
    }
    this.setState({ ranking: rankingUpdate })
    console.log("Updated " + ranking + " ",rankingUpdate);
  }

  setRankingUni = (name) => {
    const nameWrapper = '$' + name + '.value';
    this.setRanking(nameWrapper, 'rankingUni');
    this.props.setRankingUni(this.state.rankingUni);
  }

  setRankingCity = (name) => {
    const nameWrapper = '$city.' + name + '.value';
    this.setRanking(nameWrapper, 'rankingCity');
    this.props.setRankingCity(this.state.rankingCity);
  }

  setCollectionState = (collectionName, value) => {
    const newState = {};
    newState[collectionName] = value;
    this.setState(newState);
  }
  
  removeTag = (collection) => {
    const collectionName = collection[0];
    const collectionValue = collection[1];
    this.setCollectionState(collectionName, '');
    this.props.setFilterObj(collectionName, collectionValue);
  }

  toggleFilters = () => {
    this.setState({showFilters: !this.state.showFilters});
  }

  isActiveInUni = (name) => (this.state.rankingUni.indexOf('$' + name + '.value') > -1)
  isActiveInCity = (name) => (this.state.rankingCity.indexOf('$city.' + name + '.value') > -1)
  isActive = (name) => (this.isActiveInCity(name) || this.isActiveInUni(name))

  render(){
    const {filterObj} = this.props;

    let tags = [];
    Object.entries(filterObj).forEach((entry) => {
      const key = entry[0];
      const values = entry[1];
      values.forEach((value) => {
        tags.push([key, value]);
      });
    })

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
            setCollectionState={this.setCollectionState}
            setFilterObj={this.props.setFilterObj}
            collection={this.props.distinctCountries}
            tags={tags}
          />
          <Autocomp
            value={this.state.area}
            name='area'
            setCollectionState={this.setCollectionState} 
            setFilterObj={this.props.setFilterObj}
            collection={this.props.distinctAreas}
            tags={tags}
          />
          <Autocomp
            value={this.state.language}
            name='language'
            setCollectionState={this.setCollectionState}
            setFilterObj={this.props.setFilterObj}
            collection={this.props.distinctLanguages}
            tags={tags}
          />
        </div>
        <div className="flex pt3">
          <div className="flex flex-auto flex-column">
            <FilterIcon name='Ranking' dataAttrib='uniRating' iconPath='ranking' isActive={this.isActive('uniRating')}/>
            {/* TODO Tuition Fees needs appropriate scaling when applied to setRanking */}
            <FilterIcon name='Tuition Fees' dataAttrib='fees' iconPath='money' isActive={this.isActive('money')}/>
            {/* TODO Weekly Hours of Work needs appropriate scaling when applied to setRanking */}
            <FilterIcon name='Weekly Hours of Work' dataAttrib='weekly_hours' iconPath='time' isActive={this.isActive('weekly_hours')}/>
            <FilterIcon name='Difficulty' dataAttrib='difficulty' setRanking={this.setRankingUni} iconPath='difficulty' isActive={this.isActive('difficulty')}/>
            <FilterIcon name='International Orientation' dataAttrib='int_orientation' setRanking={this.setRankingUni} iconPath='globe' isActive={this.isActive('int_orientation')}/>
          </div>
          <div className="flex flex-auto flex-column">
            <FilterIcon name='Openness' dataAttrib='openness' setRanking={this.setRankingUni} iconPath='open' isActive={this.isActive('openness')}/>
            {/* TODO Gender Ratio needs appropriate scaling when applied to setRanking */}
            <FilterIcon name='Gender Ratio (Women/Men)' dataAttrib='female_percentage' iconPath='gender' isActive={this.isActive('female_percentage')}/>
            {/* TODO JOB and Research Opportunity have the same dataAttrib */}
            <FilterIcon name='Research Opportunities' dataAttrib='opportunities' setRanking={this.setRankingUni} iconPath='research' isActive={this.isActive('opportunities')}/>
            <FilterIcon name='Job Opportunities' dataAttrib='opportunities' setRanking={this.setRankingUni} iconPath='job' isActive={this.isActive('opportunities')}/>
            <FilterIcon name='Organizations/Student Clubs' dataAttrib='clubs' setRanking={this.setRankingUni} iconPath='club' isActive={this.isActive('clubs')}/>
          </div>
          <div className="flex flex-auto flex-column">
            <FilterIcon name='Student Parties' dataAttrib='party' setRanking={this.setRankingUni} iconPath='party' isActive={this.isActive('party')}/>
            <FilterIcon name='Size' dataAttrib='' iconPath='population' isActive={this.isActive('')}/>
            <FilterIcon name='Weather' dataAttrib='' iconPath='temperature' isActive={this.isActive('')}/>
            <FilterIcon name='Monthly Cost ' dataAttrib='monthly_cost' iconPath='bill' isActive={this.isActive('monthly_cost')}/>
            <FilterIcon name='Student Friendliness' dataAttrib='student_friendliness' setRanking={this.setRankingCity} iconPath='difficulty' isActive={this.isActive('student_friendliness')}/>
          </div>
          <div className="flex flex-auto flex-column">
            <FilterIcon name='Travel Options' dataAttrib='travel_options' setRanking={this.setRankingCity} iconPath='plane' isActive={this.isActive('travel_options')}/>
            <FilterIcon name='Cultural Offering' dataAttrib='culture' setRanking={this.setRankingCity} iconPath='culture' isActive={this.isActive('culture')}/>
            <FilterIcon name='Nightlife' dataAttrib='nightlife' setRanking={this.setRankingCity} iconPath='nightlife' isActive={this.isActive('nightlife')}/>
            <FilterIcon name='Gastronomy' dataAttrib='gastronomy' setRanking={this.setRankingCity} iconPath='gastronomy' isActive={this.isActive('gastronomy')} />
            <FilterIcon name='Sports' dataAttrib='sports' setRanking={this.setRankingCity} iconPath='sports' isActive={this.isActive('sports')} />
          </div>
        </div>
        <div className="pv2">
          <div>
            {tags.map((tag, index) =>
              <Tag
                key={tag[1]}
                name={tag[1]}
                index={index}
                removeTag={() => this.removeTag(tag)}
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


  
  
  
  
  
  