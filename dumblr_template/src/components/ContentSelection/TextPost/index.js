import React from 'react';

import styles from './TextPost.modules.scss';

import Button from '../../SharedComponents/Button';

class TextPost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			titleContent: '',
			textContent: '',
			whisperContent: '',
		}

		this.valueUpdater = this.valueUpdater.bind(this)
	}

	valueUpdater = field => (event) => {
		let value = event.target.value;

		const newState = {
			...this.state,
			[field]: value,
		};

		this.setState(newState);
	}

	render() {

		return (
			<div className={styles.TextPost}>
				<form id="textformSubmit">
					
					<div className={`${styles.FormElement} ${this.state.titleContent !== '' ? styles.FormElementActive : ''}`}>
						<input id="title-entry" type="text" name='title' value={this.state.titleContent} onChange={this.valueUpdater('titleContent')} />
						<label htmlFor="title-entry">Title</label>
					</div>

					<div className={`${styles.FormElement} ${styles.FormElementTextArea} ${this.state.textContent !== '' ? styles.FormElementActive : ''}`}>
						<textarea 
							id="content-entry" 
							type="text" 
							name='title' 
							value={this.state.textContent} 
							onChange={this.valueUpdater('textContent')} 
							rows="6"
						/>
						<label htmlFor="content-entry">Content</label>
					</div>

					<div className={styles.FormElementCheckbox}>
						<input type="checkbox" id="whisperPost" />
						<label htmlFor="whisperPost">Keep this post to myself</label>
					</div>

				</form>
				<Button />
			</div>
		)
	}

}

export default TextPost;