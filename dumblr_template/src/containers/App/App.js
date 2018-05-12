import React, { Component } from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			myPosts: [],
		}

		this.getMyPosts = this.getMyPosts.bind(this)
	}

	componentDidMount() {
		this.getMyPosts(this.props.myData, this)
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

			// console.log('data', headJson.posts[key], headJson.posts[key].id, headJson.posts[key].date);
	    });
	}

	render() {
		return (
			<div className="App">
				<Header />
				<ContentView 
					myPosts={this.state.myPosts}
				/>
			</div>
		);
	}
}

export default App;
