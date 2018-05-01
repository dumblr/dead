import React from 'react'

import styles from './ContentItem.modules.scss';


const ContentItem = (props) => {

	let DateItem = new Date(props.vals.postDate);
	let Time = DateItem.getHours() + `:` + DateItem.getMinutes();

	return (
		<div className={styles.ContentItem}>
			<div className={styles.ContentItem__Date}>
				<p>April<br />18</p>
			</div>
			
			<div className={styles.ContentItem__View}>
				<h2>{props.vals.postAuthorEmoji} {props.vals.postAuthor} @ {Time}</h2>
				<h3>{props.vals.postTitle}</h3>
				<p>{props.vals.postText}</p>
			</div>
		</div>
	)
}

export default ContentItem;