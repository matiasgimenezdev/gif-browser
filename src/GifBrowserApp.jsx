import { useState } from 'react';
import { Form, GifGrid } from './components';

function GifExpertApp() {
	const [categories, setCategories] = useState([]);

	const handleAddCategory = (category) => {
		if (!categories.includes(category)) {
			setCategories([category, ...categories]);
		}
	};

	const handleRemove = (category) => {
		const index = categories.indexOf(category);
		if (index >= 0) {
			const newCategories = [...categories];
			newCategories.splice(index, 1);
			setCategories(newCategories);
		}
	};

	return (
		<div className='app'>
			<h1 className='heading'>GIF Browser</h1>
			<Form handleAddCategory={handleAddCategory} />

			{categories.length > 0 ? (
				categories.map((category) => {
					return (
						<GifGrid
							key={category}
							category={category}
							handleRemove={handleRemove}
						/>
					);
				})
			) : (
				<p className='noSearchMessage'>
					Make a Search...
					<img
						src='https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						alt='empty'
					/>
				</p>
			)}
		</div>
	);
}

export default GifExpertApp;
