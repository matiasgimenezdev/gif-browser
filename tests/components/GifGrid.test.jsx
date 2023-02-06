import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
	const category = 'Messi';

	test('Inicialmente debe mostrar solo el loading', () => {
		useFetchGifs.mockReturnValue({ gifs: [], isLoading: true });

		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('Debe mostrar items cuando se cargan las imagenes con useFetchGifs()', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Messi',
				url: 'https://messi.com/messi.jpg',
			},
			{
				id: 'CDE',
				title: 'Argentina',
				url: 'https://argentina.com/messi.jpg',
			},
		];
		useFetchGifs.mockReturnValue({ gifs: gifs, isLoading: false });

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
