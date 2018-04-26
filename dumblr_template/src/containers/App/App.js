import React, { Component } from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentView />
      </div>
    );
  }
}

export default App;
