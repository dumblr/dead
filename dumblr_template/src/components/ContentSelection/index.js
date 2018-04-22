import React from 'react'

import styles from './ContentSelection.modules.scss';

class ContentSelection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPostType: '',
		}

		this.togglePostType = this.togglePostType.bind(this)
	}

	componentDidMount() {

	}

	togglePostType(val) {
		console.log('frogs', val);
		this.setState({
			showPostType: val
		})
	}

	render() {

		return(
			<div className={`${styles.ContentSelection} ${this.props.open ? styles.ContentSelection__Open : ''}`}>
				<div className={styles.ContentSelection__Items}>
					<div className={styles.ContentSelection__Item}>
						<img src="/images/icon-image.png" alt="image selector" />
						<p>Image</p>
					</div>
					<div className={styles.ContentSelection__Item}>
						<img src="/images/icon-pencil.png" alt="text selector" />
						<p>Text</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ContentSelection