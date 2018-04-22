import React from 'react'

import styles from './Post.modules.scss';

class Post extends React.Component {

	componentDidMount() {

	}

	render() {

		return(
			<div className={styles.Post}>
				<h1>Post View</h1>
				<p>Lorem Ipsum</p>
			</div>
		);
	}
}

export default Post;