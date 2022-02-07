import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const displayMaxWidth = 600;
const displayCharWidth = 21.5; //number of characters that fit displays max width;
const displayRatio = displayMaxWidth / displayCharWidth;

function getFontSize(dWidth, dLength) {
	const charRatio = dWidth / dLength / displayRatio;
	let fontSize = 1;

	if (charRatio < 1) fontSize = charRatio;

	return { fontSize: `${fontSize}em` };
}

function Display({ display }) {
	const [displayLength, setDisplayLength] = useState(display.length);
	const [displayWidth, setWidth] = useState(1);
	useEffect(() => {
		function handleResize() {
			const width = document
				.getElementById('display')
				.getBoundingClientRect().width;

			setWidth(width);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		setDisplayLength(display.length);
	}, [display]);

	return (
		<div id='display'>
			<span style={getFontSize(displayWidth, displayLength)}>{display}</span>
		</div>
	);
}

export default connect((state) => ({ display: state.display }), null)(Display);
