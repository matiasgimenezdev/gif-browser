import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Pruebas en el custom hook useFetchGifs.js', () => {
	test('Debe retornar el estado inicial ', () => {
		const { result } = renderHook(() => useFetchGifs('Messi'));
		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('Debe retornar un arreglo de imagenes y el isLoading en false ', async () => {
		const { result } = renderHook(() => useFetchGifs('Messi'));
		await waitFor(() =>
			expect(result.current.gifs.length).toBeGreaterThan(0)
		);

		const { gifs, isLoading } = result.current;
		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
