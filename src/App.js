import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import config from './config';
import Headlines from './Headlines';
import Nav from './Nav';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      articles: {},
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(e) {
    this.setState({
        search: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.get(`https://newsapi.org/v2/everything?q=${this.state.search}&language=en&pageSize=100&sortBy=publishedAt&apiKey=${config.apiKey}`).then(response => {
      console.log(response.data);
      this.setState({
        articles: response.data
      });
    });
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
        articles: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav handleSubmit={this.handleSubmit} handleInput={this.handleInput} />

        <div className="uk-container">
          
          <Headlines articles={this.state.headlines} />

          <List articles={this.state.articles.articles} />
        </div>
      </div>
    );
  }
}

export default App;
