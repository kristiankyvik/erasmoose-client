import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Search from './Search'
import React from 'react';
import TypeformButton from './TypeformButton'
import UniListResults from './UniListResults'

class UniListSearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Results2",this.props);
        const { loading, error, allUnis, _allUnisMeta, loadMorePosts, fetchMore, triggerSearchInDB, _handleCardClick} = this.props;

        return (
            <div>
                <Search triggerSearchInDB={triggerSearchInDB} loading={loading} />
                <div className="flex justify-center">
                    <UniListResults 
                        loading={loading}
                        error={error}
                        allUnis={allUnis}
                        _allUnisMeta={_allUnisMeta}
                        loadMorePosts={loadMorePosts}
                        fetchMore={fetchMore}
                        _handleCardClick={_handleCardClick}
                     />
                </div>
            </div>
        )
    }
}

export default UniListSearchResults;