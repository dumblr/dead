import React from 'react';

import styles from './ContentView.modules.scss';
import ContentViewLoop from './ContentViewLoop';

class ContentView extends React.Component {

	render() {
		return(
			<section className={styles.ContentView}>
				{this.props.postDisplay === 'mine' && <ContentViewLoop posts={this.props.myPosts} />}
				{this.props.postDisplay === 'theirs' && <ContentViewLoop posts={this.props.theirPosts} />}
			</section>
		);
	}
}

export default ContentView;