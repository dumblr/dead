import React from 'react';

import styles from './Button.modules.scss';


const Button = (props) => {

	return (
		<a className={styles.Button}>
			{props.buttonText ? props.buttonText : 'submit'}
		</a>
	);
};

export default Button;