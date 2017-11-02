import UniList from '../components/UniList'

class UniListWithSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0,40)});
    }

    render(){
        return (
            <section className="tc pv3">
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                <UniList searchKey={this.state.search} />
            </section>
        )
    }
}

export default UniListWithSearch;