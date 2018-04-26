import React from 'react'

import styles from './ImagePost.modules.scss';

class ImagePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}

		// this.toggleContentSelection = this.toggleContentSelection.bind(this)
	}

	render() {

		return (
			<div className={styles.ImagePost}>
				<p>Post Image</p>
			</div>
		)
	}

}

export default ImagePost;