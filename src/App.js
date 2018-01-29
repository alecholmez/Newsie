import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import config from './config';
import Headlines from './Headlines';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      articles: {}
    }
  }

  componentWillMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apiKey}`).then(response => {
      console.log(response.data);
      this.setState({
        headlines: response.data.articles
      });
    });

    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&language=en&pageSize=100&sortBy=publishedAt&apiKey=${config.apiKey}`).then(response => {
      console.log(response.data);
      this.setState({
        articles: response.data,
      });
    });
  }

  render() {
    return (
      <div className="uk-container">
        <h1 className="uk-heading uk-heading-primary uk-heading-divider uk-margin-small-top">Newsie</h1>

        <Headlines articles={this.state.headlines} />

        <List articles={this.state.articles.articles} />
      </div >
    );
  }
}

export default App;
