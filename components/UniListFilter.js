
import Autocomplete from 'react-toolbox/lib/autocomplete';

const source = [
  'Spain',
  'Thailand',
  'England',
  'USA'
];

export default class UniListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        countries: []
    };
  }

  handleChange = (value) => {
    console.log("hallo",value);
  };


  render(){
    return(
      <Autocomplete
        direction="down"
        selectedPosition="above"
        label="Choose countries"
        onChange={this.handleChange}
        source={source}
        value={this.state.countries}
      />
    );

    
    
  }


  
  
  
  
  
  