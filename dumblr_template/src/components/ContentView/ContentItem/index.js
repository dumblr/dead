import React from 'react'

import styles from './ContentItem.modules.scss';


const ContentItem = (props) => {

	return (
		<div className={styles.ContentItem}>
			<div className={styles.ContentItem__Date}>
				<p>April<br />18</p>
			</div>
			
			<div className={styles.ContentItem__View}>
				<h2>{props.vals.postAuthorEmoji} {props.vals.postAuthor} @ {`03:45`}</h2>
				<p>{props.vals.postText}</p>
			</div>
		</div>
	)
}

export default ContentItem