import { useState } from 'react';
function GifExpertApp() {
	const [categories, setCategories] = useState([
		'Fútbol',
		'Programación',
		'Arte',
	]);
	const [category, setCategory] = useState('');

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	const handleAdd = (event) => {
		setCategories([category, ...categories]);
	};

	return (
		<>
			<h1>Gif Expert Application</h1>
			<input
				placeholder='Add category...'
				name='category'
				id='category'
				onChange={handleChange}
			/>
			<button onClick={handleAdd}>Add category</button>
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
}

export default GifExpertApp;
