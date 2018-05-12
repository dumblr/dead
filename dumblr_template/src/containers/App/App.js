import React, { Component } from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			postDisplay: 'mine',
			myPosts: [],
			theirPosts: [],
		}

		this.getMyPosts = this.getMyPosts.bind(this);
		this.getTheirPosts = this.getTheirPosts.bind(this);
		this.togglePostDisplay = this.togglePostDisplay.bind(this);
	}

	componentDidMount() {
		this.getMyPosts(this.props.myData, this);
		this.getTheirPosts(this.props.myData, this);
	}

	togglePostDisplay(val) {
		this.setState({
			postDisplay: val,
		})
	}

	getMyPosts = (headJson, that) => {
		Object.keys(headJson.posts).forEach(function(key) {
			fetch(process.env.PUBLIC_URL + `/files/mine/posts/` + headJson.posts[key].id + `.json`)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				let myPosts = that.state.myPosts;
				myPosts.push(myJson)
				that.setState({
					myPosts: myPosts
				})
			});

		});
	}

	getTheirPosts = (headJson, that) => {
		//--- Awaiting the implementation of published posts on the dat network

		// Object.keys(headJson.posts).forEach(function(key) {
		// 	fetch(process.env.PUBLIC_URL + `/files/their/posts/` + headJson.posts[key].id + `.json`)
		// 	.then(function(response) {
		// 		return response.json();
		// 	})
		// 	.then(function(myJson) {
		// 		let theirPosts = that.state.theirPosts;
		// 		theirPosts.push(myJson)
		// 		that.setState({
		// 			theirPosts: theirPosts
		// 		})
		// 	});

		// });
	}

	render() {
		return (
			<div className="App">
				<Header
					postDisplay={this.state.postDisplay}
					togglePostDisplay={this.togglePostDisplay}
				/>
				<ContentView
					postDisplay={this.state.postDisplay}
					myPosts={this.state.myPosts}
					theirPosts={this.state.theirPosts}
				/>
			</div>
		);
	}
}

export default App;
