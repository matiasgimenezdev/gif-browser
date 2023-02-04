import { useState } from 'react';
import { Form, GifGrid } from './components';

function GifExpertApp() {
	const [categories, setCategories] = useState([]);

	const handleAdd = (category) => {
		if (!categories.includes(category)) {
			setCategories([category, ...categories]);
		}
	};

	return (
		<div className='app'>
			<h1 className='heading'>GIF Browser</h1>
			<Form handleAdd={handleAdd} />

			{categories.length > 0 ? (
				categories.map((category) => {
					return <GifGrid key={category} category={category} />;
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
