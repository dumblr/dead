import React from 'react'

import styles from './ContentView.modules.scss';
import ContentItem from './ContentItem';

const sampleData = [{
	'postDate': 'Sun Apr 29 2018 18:42:28 GMT-0400 (EDT)', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postTitle': 'TItle One Whatever',
	'postAuthor': 'Frogs Frog',
	'postAuthorEmoji': '👻',
	'postAssetRef': false,
	'postText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
},{
	'postDate': 'Sun Apr 29 2018 18:42:28 GMT-0400 (EDT)', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postTitle': 'TItle One Whatever',
	'postAuthor': 'Dog Dogs',
	'postAuthorEmoji': '😈',
	'postAssetRef': false,
	'postText': 'dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs',
},{
	'postDate': 'Sun Apr 29 2018 18:42:28 GMT-0400 (EDT)', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postTitle': 'TItle One Whatever',
	'postAuthor': 'Froggin Frogger',
	'postAuthorEmoji': '🗣',
	'postAssetRef': false,
	'postText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}];


class ContentView extends React.Component {

	componentDidMount() {

	}

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