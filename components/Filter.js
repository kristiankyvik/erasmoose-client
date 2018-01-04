
import Autocomplete from 'react-autocomplete'

  

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 'select a country',
        countries: ['Germany','Spain','France','Sweden','Netherlands','Portugal','Norway']
    };
  }

  componentWillMount = () => {
    let countries = [];
    this.state.countries.forEach((country) => {
      countries.push({label: country});
    });
    this.setState({countries: countries});
  }

  onSelect = (value) => {
    this.setState({value: value});
    this.props.setFilterObj([value]);
  }

  render(){
    return(
      <Autocomplete
        getItemValue={(item) => item.label}
        items={this.state.countries}
        renderItem={(item, isHighlighted) =>
          <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        value={this.state.value}
        onSelect={this.onSelect}
        onChange={(e) => (this.state.value = e.target.value)}
      />
    );
  }
}


  
  
  
  
  
  