import React from 'react';
// import ReactDOM from 'react-dom';

import styles from './ContentView.modules.scss';
import ContentViewLoop from './ContentViewLoop';

class ContentView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			myPosts: [],
			theirPosts: [],
		}

		this.getMyPosts = this.getMyPosts.bind(this);
		this.getTheirPosts = this.getTheirPosts.bind(this);
		// this.getHeadJson = this.getHeadJson.bind(this);
	}

	componentDidMount() {
		// let myDataHead = this.getHeadJson();

		// this.getMyPosts(myDataHead, this);
		// this.getTheirPosts(myDataHead, this);
		this.getMyPosts();
		this.getTheirPosts();
	}

	getMyPosts = () => {
		console.log('my posts');
	}

	getTheirPosts = () => {
		console.log('their posts');
	}

	// getHeadJson = () => {
	// 	fetch(`${process.env.PUBLIC_URL}/files/mine/head.json`)
	// 	.then(function(response) {
	// 		return response.json
	// 	})
	// 	.then(function(json) {
	// 		return json
	// 	})
	// }

	// getMyPosts = (headJson, that) => {
	// 	Object.keys(headJson.posts).forEach(function(key) {
	// 		fetch(process.env.PUBLIC_URL + `/files/mine/posts/` + headJson.posts[key].id + `.json`)
	// 		.then(function(response) {
	// 			return response.json();
	// 		})
	// 		.then(function(myJson) {
	// 			let myPosts = that.state.myPosts;
	// 			myPosts.push(myJson)
	// 			that.setState({
	// 				myPosts: myPosts
	// 			})
	// 		});

	// 	});
	// }

	// getTheirPosts = (headJson, that) => {
	// 	//--- Awaiting the implementation of published posts on the dat network

	// 	Object.keys(headJson.posts).forEach(function(key) {
	// 		fetch(process.env.PUBLIC_URL + `/files/their/posts/` + headJson.posts[key].id + `.json`)
	// 		.then(function(response) {
	// 			return response.json();
	// 		})
	// 		.then(function(myJson) {
	// 			let theirPosts = that.state.theirPosts;
	// 			theirPosts.push(myJson)
	// 			that.setState({
	// 				theirPosts: theirPosts
	// 			})
	// 		});

	// 	});
	// }

	render() {
		return(
			<section className={styles.ContentView}>
				{this.props.postDisplay === 'mine' && <ContentViewLoop posts={this.state.myPosts} />}
				{this.props.postDisplay === 'theirs' && <ContentViewLoop posts={this.state.theirPosts} />}
			</section>
		);
	}
}

export default ContentView;