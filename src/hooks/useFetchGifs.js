import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

function useFetchGifs(category) {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifs(category).then((newGifs) => {
			setGifs(newGifs);
			setIsLoading(false);
		});
	}, []);

	return { gifs, isLoading };
}

export default useFetchGifs;
