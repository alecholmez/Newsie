import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="uk-list uk-list-divider">
                {this.props.articles.map((article, i) => (
                    <li key={i}>
                        <article className="uk-article">
                            <div className="uk-padding">
                                <h2 className="uk-article-title">{article.title}</h2>
                                <p className="uk-article-meta">Written by <a>{article.author}</a></p>
                                <p>{article.description}</p>

                                <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                                    <div>
                                        <a className="uk-button uk-button-text" href={article.url}>Read more</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        );
    }
}

List.propTypes = {
    articles: PropTypes.array
};

List.defaultProps = {
    articles: []
}

export default List;