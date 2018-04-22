import React from 'react'

import styles from './ImagePost.modules.scss';

class TextPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}

		// this.toggleContentSelection = this.toggleContentSelection.bind(this)
	}

	render() {

		return (
			<div className={styles.TextPost}>
				<p>Post Text</p>
			</div>
		)
	}

}

export default TextPost;