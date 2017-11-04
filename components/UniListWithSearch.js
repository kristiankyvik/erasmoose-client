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
                <input 
                    className="search-input"
                    type="text"
                    value={this.state.searchKeyShownInField}
                    onChange={this.updateSearch.bind(this)}
                />
                <UniList searchKey={this.state.searchKey} />
                <style jsx>{`
                    .search-input {
                        padding-left: 3em;
                        font-size: 1.5em;
                        background-image: url(/assets/web/browse/search-3009eba….svg);
                        background-repeat: no-repeat;
                        background-position-y: 50%;
                        background-position-x: 1em;
                        background-size: 1em;
                        display: inline-block;
                        width: 300px;
                        border-color: #09f;
                        padding: .5em .75em;
                        font-size: 1.25em;
                        font-family: "Avenir Next W01", "Avenir Next", "Avenir", helvetica, arial, sans-serif;
                        font-weight: 700;
                        color: #333;
                        border: 0.25em solid #eee;
                        border-radius: 0.5em;
                        background: white;
                        box-sizing: border-box;
                        -webkit-appearance: none;
                        -webkit-tap-highlight-color: transparent;
                    }
                `}</style>
            </section>
        )
    }
}

export default UniListWithSearch;