import React, { Component } from 'react';

import Header from './components/Header';
import BlogView from './components/BlogView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BlogView />
      </div>
    );
  }
}

export default App;
