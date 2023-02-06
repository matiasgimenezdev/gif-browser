import { GifItem } from './../../src/components/';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem>', () => {
	const title = 'Messi';
	const url = 'https://fifaworldcup.com/messi.jpg';

	test('<GifItem> debe matchear con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe renderizar la imagen con la url y el ALT indicados ', () => {
		render(<GifItem title={title} url={url} />);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Debe renderizar el title ', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
