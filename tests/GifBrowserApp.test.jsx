import GifBrowserApp from '../src/GifBrowserApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <GifBrowserApp/>', () => {
	test('Debe agregar una categoria al estado ', () => {
		render(<GifBrowserApp />);
		const $input = screen.getByRole('textbox');
		const $form = screen.getByRole('form', { name: 'form' });

		fireEvent.input($input, { target: { value: 'Messi' } });
		fireEvent.submit($form);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
	});

	test('No debe agregar una categoria al estado si ya se encuentra en el. ', () => {
		render(<GifBrowserApp />);
		const $input = screen.getByRole('textbox');
		const $form = screen.getByRole('form', { name: 'form' });

		fireEvent.input($input, { target: { value: 'Development' } });
		fireEvent.submit($form);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
	});
});
