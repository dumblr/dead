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
		this.pushPost = this.pushPost.bind(this);

		this.getTheirPosts = this.getTheirPosts.bind(this);
		// this.getHeadJson = this.getHeadJson.bind(this);
	}

	componentDidMount() {
		const archive = new global.DatArchive(`a3edeacf33ac8be2244dd43b7137c1b573e6207d757abf116fa047020791eabb/`);

		this.getMyPosts(archive);
		// this.getTheirPosts();
	}

	async getMyPosts(archive) {
		let myHead = await archive.readFile('/files/mine/head.json');
		console.log('myHead', myHead, JSON.parse(myHead))

		await JSON.parse(myHead).posts.map((post, key) => {
			this.pushPost(post.id, archive)
		});
		
		// Object.keys(myHead.posts).forEach(function(key) {
		// 	this.pushPosts(myHead.posts[key].id, archive)
		// });
	}

	async pushPost(postId, archive) {
		let post = await archive.readFile(`/files/mine/posts/` + postId + `.json`);
		let myPosts = this.state.myPosts;

		console.log('post', post)

		myPosts.push(JSON.parse(post));
		this.setState({
			myPosts: myPosts
		});
	}

	getTheirPosts = () => {

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