import React from 'react'

import styles from './ContentView.modules.scss';
import ContentItem from './ContentItem';

const sampleData = [{
	'postDate': '018-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Frogs Frog',
	'postAuthorEmoji': '👻',
	'postAssetRef': false,
	'postText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},{
	'postDate': '017-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Dog Dogs',
	'postAuthorEmoji': '😈',
	'postAssetRef': false,
	'postText': 'dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs',
},{
	'postDate': '016-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Froggin Frogger',
	'postAuthorEmoji': '🗣',
	'postAssetRef': false,
	'postText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}];

class ContentView extends React.Component {

	render() {
		return(
			<section className={styles.ContentView}>
				{sampleData.map((item, i) =>
					<ContentItem vals={item} key={i} />
				)}
			</section>
		);
	}
}

export default ContentView