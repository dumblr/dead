import React from 'react'

import styles from './ContentItem.modules.scss';


const ContentItem = (props) => {
	let DateItem = new Date(props.vals.date);
	let Time = DateItem.getHours() + `:` + DateItem.getMinutes();
	let Month = DateItem.getMonth();
	let Day = DateItem.getDate();
	let MonthWord;

	switch (true) {
		case Month === 0: MonthWord = 'January'; break;
		case Month === 1: MonthWord = 'February'; break;
		case Month === 2: MonthWord = 'March'; break;
		case Month === 3: MonthWord = 'April'; break;
		case Month === 4: MonthWord = 'May'; break;
		case Month === 5: MonthWord = 'June'; break;
		case Month === 6: MonthWord = 'July'; break;
		case Month === 7: MonthWord = 'August'; break;
		case Month === 8: MonthWord = 'September'; break;
		case Month === 9: MonthWord = 'October'; break;
		case Month === 10: MonthWord = 'November'; break;
		case Month === 11: MonthWord = 'December'; break;
    }

	return (
		<div className={styles.ContentItem}>
			<div className={styles.ContentItem__Date}>
				<p>{MonthWord}<br />{Day}</p>
			</div>
			
			<div className={styles.ContentItem__View}>
				<h2>{props.vals.author_avatar} {props.vals.author} @ {Time}</h2>
				<h3>{props.vals.title}</h3>
				{props.vals.text_data.length > 0 && props.vals.text_data.map((item, i) =>
					<div key={i}>
						{item.html_tag === "p" && <p>{item.content}</p>}
						{item.html_tag === "h1" && <h1>{item.content}</h1>}
						{item.html_tag === "h2" && <h2>{item.content}</h2>}
						{item.html_tag === "h3" && <h3>{item.content}</h3> }
						{item.html_tag === "h4" && <h4>{item.content}</h4> }
					</div>
				)}
			</div>
		</div>
	)
}

export default ContentItem;