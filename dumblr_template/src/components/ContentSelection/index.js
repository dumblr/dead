import React from 'react'

import styles from './ContentSelection.modules.scss';

class ContentSelection extends React.Component {

	componentDidMount() {

	}

	render() {

		return(
			<div className={`${styles.ContentSelection} ${this.props.open ? styles.ContentSelection__Open : ''}`}>
				<h1>ContentSelection</h1>
			</div>
		);
	}
}

export default ContentSelection