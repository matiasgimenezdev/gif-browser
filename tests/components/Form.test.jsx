import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../../src/components/';

describe('Pruebas en <Form/>', () => {
	test('Debe cambiar el valor del input', () => {
		render(<Form handleAddCategory={() => {}} />);
		const $input = screen.getByRole('textbox');

		fireEvent.input($input, { target: { value: 'Messi' } });

		expect($input.value).toBe('Messi');
	});

	test('Debe llamar handleAddCategory() si el input tiene un valor', () => {
		const inputValue = 'Messi';
		const handleAddCategory = jest.fn();

		render(<Form handleAddCategory={handleAddCategory} />);

		const $input = screen.getByRole('textbox');
		const $form = screen.getByRole('form', { name: 'form' });

		fireEvent.input($input, { target: { value: inputValue } });
		fireEvent.submit($form);

		expect($input.value).toBe('');

		expect(handleAddCategory).toHaveBeenCalled();
		expect(handleAddCategory).toHaveBeenCalledTimes(1);
		expect(handleAddCategory).toHaveBeenCalledWith(inputValue);
	});

	test('No debe llamar a handleAddCategory() si el input NO tiene un valor', () => {
		const handleAddCategory = jest.fn();
		render(<Form handleAddCategory={handleAddCategory} />);

		const $input = screen.getByRole('textbox');
		const $form = screen.getByRole('form', { name: 'form' });

		fireEvent.submit($form);
		expect(handleAddCategory).not.toHaveBeenCalled();
	});
});
