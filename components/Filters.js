import React from 'react';
import Filter from './Filter'

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="pv2">
        <Filter 
          setFilterObj={this.props.setFilterObj}
          setBooleanFilter={this.props.setBooleanFilter}
          setRankingCity={this.props.setRankingCity}
          setRankingUni={this.props.setRankingUni} 
          loading={this.props.loading}
          filterObj={this.props.filterObj}
        />

      </section>
    )
  }
}
