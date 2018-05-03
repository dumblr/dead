import React from 'react'

import styles from './ContentView.modules.scss';
import ContentItem from './ContentItem';

class ContentView extends React.Component {

	componentDidMount() {

	}

	render() {
		return(
			<section className={styles.ContentView}>
				{this.props.myPosts.map((item, i) =>
					<ContentItem vals={item} key={i} />
				)}
			</section>
		);
	}
}

export default ContentView