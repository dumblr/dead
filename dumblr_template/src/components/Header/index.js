import React from 'react'

import styles from './Header.modules.scss';
import ContentSelection from '../ContentSelection'

class Header extends React.Component {

	componentDidMount() {

	}

	render() {

		return(
			<header className={styles.Header}>
				<ContentSelection />
			</header>
		);
	}
}

export default Header