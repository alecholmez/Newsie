import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      numArticles: 0
    };
  }

  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=925f594b04184224b9651a420b395a45').then(response => {
      console.log(response.data);
      this.setState({
        articles: response.data.articles,
        numArticles: response.data.totalResults
      });
    });
  }

  render() {
    return (
      <div className="uk-container">
        <h1 className="uk-heading uk-heading-primary uk-heading-divider uk-margin-small-top">Newsie</h1>

        <div data-uk-slider="center: true; autoplay: true; autoplay-interval: 5000;">
          <div className="uk-position-relative uk-visible-toggle uk-dark">
            <ul className="uk-slider-items uk-child-width-1-2@s uk-grid uk-grid-match">
              {this.state.articles.map(article => (
                <li key={article.title}>
                  <div className="uk-card uk-card-secondary">
                    <div className="uk-card-media-top">
                      <img src={article.urlToImage} alt="" />
                    </div>
                    <div className="uk-card-body">
                      <h3 className="uk-card-title">{article.title}</h3>
                      <div className="uk-text-small uk-grid-divider uk-grid-collapse" data-uk-grid>
                        <div>
                          <p>Author: <span className="uk-text-meta">{article.author}</span></p>
                        </div>
                        <div>
                          <p>Source: <span className="uk-text-meta">{article.source.name}</span></p>
                        </div>
                      </div>
                      <p>{article.description}</p>
                      <hr />
                      <a href={article.url} className="uk-button uk-button-text">Read more</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next data-uk-slider-item="next"></a>

          </div>

          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
      </div >
    );
  }
}

export default App;
