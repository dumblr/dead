import React, { Component } from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			myPosts: [],
		}

		// this.valueUpdater = this.valueUpdater.bind(this)
	}

	componentDidMount() {
		console.log('data', this.props.myData)
	}

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
