import React from 'react'

import styles from './ContentView.modules.scss';
import ContentItem from './ContentItem';

const sampleData = [{
	'postDate': '018-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Frogs Frog',
	'postAssetRef': false,
	'postText': 'frogs frogs frogs frogs',
},{
	'postDate': '017-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Dog Dogs',
	'postAssetRef': false,
	'postText': 'dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs',
},{
	'postDate': '016-04-22T20:18:21.158Z', // UTC in string format
	'postType': 'text', // types so far include text and image
	'postAuthor': 'Froggin Frogger',
	'postAssetRef': false,
	'postText': 'frogs frogs frogs frogs dogs dogs dogs',
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