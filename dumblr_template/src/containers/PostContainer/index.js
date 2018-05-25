import React, { Component } from 'react';

import Header from '../../components/Header';
import Post from '../../components/Post';

class PostContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			postDisplay: 'mine',
			postData: {},
		}

		this.togglePostDisplay = this.togglePostDisplay.bind(this);
		this.getPost = this.getPost.bind(this);
	}

	togglePostDisplay(val) {
		this.setState({
			postDisplay: val
		})
	}

	async getPost(archive, postId) {
		let myPost = await archive.readFile('/files/mine/posts/' + postId + '.json');
		let post = JSON.parse(myPost)

		console.log(archive, postId, JSON.parse(myPost));
		this.setState({
			postData: post
		})
	}

	componentDidMount() {
		const archive = new global.DatArchive(`0b98d0904d15440351a770cb5e62c95c7f2b3d6a88d651d3427ad94e76bfc2f1`);
		this.getPost(archive, this.props.match.params.postId);
	}

	render() {
		return (
			<div className="App">
				<Header
					postDisplay={this.state.postDisplay}
					togglePostDisplay={this.togglePostDisplay}
				/>
				<Post
					data={this.state.postData}
				/>
			</div>
		)
	}
}

export default PostContainer;
