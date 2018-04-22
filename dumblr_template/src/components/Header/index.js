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
		console.log('frogs', this.state)
		this.setState({
			contentSelectionOpen: !this.state.contentSelectionOpen,
		})
	}

	render() {

		return(
			<header className={styles.Header}>
				<a onClick={() => this.toggleContentSelection()}>Add an Entry</a>

				<ContentSelection
					frogs="frogs"
					open={this.state.contentSelectionOpen}
				/>
			</header>
		);
	}
}

export default Header