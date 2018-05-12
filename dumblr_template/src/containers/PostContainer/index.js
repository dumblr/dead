import React, { Component } from 'react';

import Header from '../../components/Header';
import Post from '../../components/Post';

class PostContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			postDisplay: 'mine',
		}

		this.togglePostDisplay = this.togglePostDisplay.bind(this);
	}

	togglePostDisplay(val) {
		this.setState({
			postDisplay: val,
		})
	}

	render() {
		return (
			<div className="App">
				<Header
					postDisplay={this.state.postDisplay}
					togglePostDisplay={this.togglePostDisplay}
				/>
				<Post />
			</div>
		)
	}
}

export default PostContainer;