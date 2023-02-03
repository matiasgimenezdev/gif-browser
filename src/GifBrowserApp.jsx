import { useState } from 'react';
import Form from './components/Form/Form';
import GifGrid from './components/GifGrid/GifGrid';

function GifExpertApp() {
	const [categories, setCategories] = useState(['Valorant']);

	const handleAdd = (category) => {
		if (!categories.includes(category)) {
			setCategories([category, ...categories]);
		}
	};

	return (
		<>
			<h1>Gif Expert Application</h1>
			<Form handleAdd={handleAdd} />

			{categories.map((category) => {
				return <GifGrid key={category} category={category} />;
			})}
		</>
	);
}

export default GifExpertApp;
