import React from 'react';

import styles from './TextPost.modules.scss';

import Button from '../../SharedComponents/Button';

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
				<form id="textformSubmit">
					<input type="text" placeholder="Title" />
					<textarea placeholder="Content" rows="6" />
					<div className="">
						<input type="checkbox" id="whisperPost" />
						<label for="whisperPost">Keep this post to myself</label>
					</div>
				</form>
				<Button />
			</div>
		)
	}

}

export default TextPost;