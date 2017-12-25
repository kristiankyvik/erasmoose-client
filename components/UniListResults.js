import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Search from './Search'
import React from 'react';
import TypeformButton from '../components/TypeformButton'
import Loader from '../components/Loader'

class UniListResults extends React.Component {
    constructor(props) {
        super(props);
    }

    showMoreUnis = (allUnis, fetchMore) => {
        return fetchMore({
            variables: {
                skip: allUnis.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                console.log("fetchMore",fetchMoreResult)
                if (!fetchMoreResult) {
                    return previousResult
                }
                return Object.assign({}, previousResult, {
                    allUnis: [...previousResult.allUnis, ...fetchMoreResult.allUnis]
                })
            }
        });
    }

    render() {

        const { loading, index, error, allUnis, _allUnisMeta, loadMorePosts, fetchMore, _handleCardClick, _handleFormClick, postPerPage } = this.props;

        if (error) return <ErrorMessage message='Error loading entries.' />
        if (!allUnis && loading) return <Loader />;
        const areMorePosts = (allUnis.length < _allUnisMeta.count) && (allUnis.length >= postPerPage);
        if (allUnis && allUnis.length) {
            return (
                <section className="tc">
                    <div className="db justify-center">
                        <div style={{ maxWidth: 1080 }} className="flex flex-wrap justify-center">
                            {allUnis.map((uni, index) =>
                                <Card
                                    key={uni._id}
                                    uni={uni}
                                    index={index + 1}
                                    _handleCardClick={(evt) => _handleCardClick(evt, index, allUnis[index])}
                                />
                            )}
                        </div>
                    </div>
                    <div className="justify-center flex pt4">
                        {areMorePosts ? <div className="btn-new tc max justify-center" onClick={() => this.showMoreUnis(allUnis, fetchMore)}> {loading ? 'Loading...' : 'Show More'} </div> : ''}
                    </div>
                    <style jsx>{`
                        section {
                            padding-bottom: 20px;
                        }
                        .m0a {
                            margin: 0 auto;
                        }
                        li {
                            display: block;
                            margin-bottom: 10px;
                        }
                        .btn-new {
                            background-color: #333;
                        }
                        input {
                            color: black;
                        }
                        a {
                        font-size: 14px;
                        margin-right: 10px;
                        text-decoration: none;
                        padding-bottom: 0;
                        border: 0;
                        }
                        span {
                        font-size: 14px;
                        margin-right: 5px;
                        }
                        ul {
                        margin: 0;
                        padding: 0;
                        }
                    `}</style>
                </section>
            )
        }
        return (
            <div className="" style={{ color: "rgb(152, 149, 149)" }}>
                <div className="pt4 pb3 f3">
                    <div className="">
                        Don't find your uni?
            </div>
                Be the first to review it!
            </div>
            <TypeformButton/>
            </div>
        )
    }
}

export default UniListResults;