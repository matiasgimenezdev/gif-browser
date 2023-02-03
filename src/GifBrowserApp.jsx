import { useState } from 'react';
import { Form, GifGrid } from './components';

function GifExpertApp() {
	const [categories, setCategories] = useState(['Valorant']);

	const handleAdd = (category) => {
		if (!categories.includes(category)) {
			setCategories([category, ...categories]);
		}
	};

	return (
		<>
			<h1>GIF Browser</h1>
			<Form handleAdd={handleAdd} />

			{categories.map((category) => {
				return <GifGrid key={category} category={category} />;
			})}
		</>
	);
}

export default GifExpertApp;
