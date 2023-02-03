import { useEffect, useState } from 'react';
import './GifGrid.css';
import { getGifs } from '../../helpers/getGifs';

function GifGrid(props) {
	const { category } = props;
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		getGifs(category).then((newGifs) => {
			setGifs(newGifs);
		});
	}, []);

	return (
		<>
			<h3>{category}</h3>
			<ul>
				{gifs.map((gif) => {
					const { id, title, image } = gif;
					return <li key={id}>{title}</li>;
				})}
			</ul>
		</>
	);
}

export default GifGrid;
