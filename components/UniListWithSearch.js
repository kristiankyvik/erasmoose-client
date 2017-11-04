const lodash = require('lodash'); //get lodash librar

import UniList from '../components/UniList'

const DELAY_SEARCH_FOR_UNI_IN_MS = 300;

class UniListWithSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchKeyShownInField: '',
            searchKey: '',
        };
    }

    updateSearch = ((event) => {
        let searchKey = event.target.value.substr(0, 40);

        this.setState({ searchKeyShownInField: searchKey});
        this.triggerSearch.call(this, searchKey);
    });

    triggerSearch = lodash.debounce((searchKey) => {
        console.log("Search started");
        this.setState({ searchKey: searchKey });
    }, DELAY_SEARCH_FOR_UNI_IN_MS);

    render(){
        return (
            <section className="tc pv3">
                <div className="relative tc pv3">
                    <input 
                        className="search-input mv3"
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                        style={{backgroundImage: `url("./static/search.svg")`, backgroundRepeat: "no-repeat", backgroundPositionY: "50%", backgroundPositionX: "1em", backgroundSize: "1em"}}
                    />
                    <img src="./static/loader.svg" className="loader absolute top-2 dn" />
                </div>
                <UniList searchKey={this.state.search} />
                <style jsx>{`
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
                    .loader {
                        margin-left: -54px;
                    }
                `}</style>
            </section>
        )
    }
}

export default UniListWithSearch;