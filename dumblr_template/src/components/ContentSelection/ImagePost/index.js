import React from 'react'

import styles from './ImagePost.modules.scss';

import Button from '../../SharedComponents/Button';

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
				<form className={styles.Box} enctype="multipart/form-data">
					<input type="text" placeholder="title" />
					<div className={styles.Box__Input}>
						<input 
							className={styles.Box__File}
							type="file" 
							name="files[]"
							id="file" 
							data-multiple-caption="{count} files selected" 
							multiple 
						/>
						<label for="file">
							Choose a file 
							<span className={styles.Box__Dragndrop}> or drag it here</span>
						</label>
						<Button 
							buttonText={'Upload Image'}
						/>
					</div>
					<input type="text" placeholder="Image Description" />
				</form>
			</div>
		)
	}

}

export default ImagePost;