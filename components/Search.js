import Router from 'next/router';
import gql from 'graphql-tag';
import getGraphql from '../graphql/graphqlSearch';

const lodash = require('lodash'); //get lodash library

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = null;
    this.setUnisSearch = this.props.setUnisSearch;
    this.state = {
      searchKey : lodash.get(this.props.query,'q','')
    };
  }

  componentDidMount() {
    this.searchInput.focus();
    this.setUnisSearch(this.state.searchKey);
  }

  keyPress(e){
    if(e.keyCode == 13 && !this.props.liveFilter) {
      Router.push({
        pathname: '/search',
        query: { q: e.target.value }
      })
    }
  }

  handleChange(e) {

    const searchKey = e.target.value;
    this.setState({searchKey: searchKey});
    
    if (!this.props.liveFilter) return;
    this.setUnisSearch(searchKey);

    Router.push(
      `/search?q=${searchKey}`,
      `/search?q=${searchKey}`,
      { shallow: true }
    );
  }

  render() {
    return (
      <div>
        <div className={ `searchInput relative tc ${this.props.loading ? "searching" : ""}`} >
          <input 
            ref={(el) => { this.searchInput = el; }}
            className="search-input mv3 m0a"
            placeholder="Search..."
            type="text"
            value={this.state.searchKey}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPress.bind(this)}
            style={{backgroundImage: `url("./static/search.svg")`, backgroundRepeat: "no-repeat", backgroundPositionY: "50%", backgroundPositionX: "1em", backgroundSize: "1em"}}
        />
          <img src="./static/loader.svg" className="loader absolute" />
        </div>
        <style jsx>
          {`
            .loader {
              right: 50%;
              margin-right: -233px;
              display: none;
              top: 10px;
            }
            .searchInput.searching .loader {
              display: block;
            }
            section {
              padding-bottom: 20px;
            }
            .m0a {
              margin: 0 auto;
            }
            .search-input {
              font-size: 1.5em;
              display: inline-block;
              width: 500px;
              border-color: #eee;
              padding: .7em .75em;
              padding-left: 3em;
              font-size: 1.45em;
              font-family: "Avenir Next W01", "Avenir Next", "Avenir", helvetica, arial, sans-serif;
              color: #333;
              border: 0.25em solid #eee;
              border-radius: 0.5em;
              background: white;
              box-sizing: border-box;
              -webkit-appearance: none;
              -webkit-tap-highlight-color: transparent;
              // border-width:0px;
              // border:none;
            }

            .search-input:focus {
              border-color: #22BAD9;
              outline-width: 0;
            }
          `}
        </style>
      </div>
    )
  }
}


export default Search;




