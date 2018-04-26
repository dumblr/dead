import React from 'react'

import styles from './Header.modules.scss';
import ContentSelection from '../ContentSelection'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contentSelectionOpen: false,
		}

		this.toggleContentSelection = this.toggleContentSelection.bind(this)
	}

	componentDidMount() {

	}

	toggleContentSelection() {
		
		this.setState({
			contentSelectionOpen: !this.state.contentSelectionOpen,
		})
	}

	render() {

		return(
			<header className={styles.Header}>
				<a className={styles.ContentToggle} onClick={() => this.toggleContentSelection()}>
					{this.state.contentSelectionOpen ? 'Close' : 'Add an entry'}
				</a>

				<ContentSelection
					open={this.state.contentSelectionOpen}
				/>
			</header>
		);
	}
}

export default Header