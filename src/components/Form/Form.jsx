import { useState } from 'react';
import './Form.css';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

export function Form(props) {
	const { handleAdd } = props;
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const category = capitalizeFirstLetter(inputValue.trim().toLowerCase());
		if (category.length > 0) {
			handleAdd(category);
			setInputValue('');
			event.target.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoComplete='off'
				placeholder='Search GIFs...'
				name='category'
				id='category'
				onChange={handleChange}
			/>
		</form>
	);
}
