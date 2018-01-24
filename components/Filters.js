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
          setRankingCity={this.props.setRankingCity}
          setRankingUni={this.props.setRankingUni} 
          loading={this.props.loading}
        />

      </section>
    )
  }
}
