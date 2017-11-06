
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = null;
    this.state = {
      searchKey: ""
    };
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  updateSearch(event) {
    const searchKey = event.target.value.substr(0,40);
    this.setState({ searchKey });
    this.props.triggerSearchInDB(searchKey);
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <div className={ `searchInput relative tc pv5 ${loading ? "searching" : ""}`} >
          <input 
            ref={(el) => { this.searchInput = el; }}
            className="search-input mv3 m0a"
            placeholder="Search..."
            type="text"
            value={this.state.searchKey}
            onChange={this.updateSearch.bind(this)}
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
              top: 76px;
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
              border-color: #09f;
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
