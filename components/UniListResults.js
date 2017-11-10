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

    render() {
        const { index, _handleCardClick, allUnis, _allUnisMeta} = this.props;
        const areMorePosts = (allUnis.length === this.props.threshold) && (allUnis.length < _allUnisMeta.count);

        if (this.props.loading) return <Loader />;
        if (allUnis && allUnis.length) {
            return (
                <section className="tc">
                    <div className="db justify-center">
                        <div style={{ width: 1080 }} className="flex flex-wrap justify-center">
                            {allUnis.map((uni, index) =>
                                <Card
                                    key={uni.name}
                                    uni={uni}
                                    index={index + 1}
                                    _handleCardClick={(evt) => _handleCardClick(evt, index, allUnis[index])}
                                />
                            )}
                        </div>
                    </div>
                    <div className="justify-center flex pt4">
                        {(areMorePosts || this.props.loadingShowMoreButton) ? <div className="btn-new tc max justify-center" onClick={() => this.props.graphql.setUnisLoadMore()}> {this.props.loadingShowMoreButton ? 'Loading...' : 'Show More'} </div> : ''}
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
                        .btn-new {
                        display: inline-block;
                        cursor: pointer;
                        margin: 0 auto;
                        padding: .4375em 1.5em .5em;
                        color: #fff;
                        font-size: 1.5em;
                        font-weight: 800;
                        line-height: 1;
                        vertical-align: middle;
                        text-align: center;
                        white-space: nowrap;
                        border: 3px solid transparent;
                        background-color: #333;
                        border-radius: 2.5em;
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
                <TypeformButton />
            </div>
        )
    }
}

export default UniListResults;