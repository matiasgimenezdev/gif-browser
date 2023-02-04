import './GifGrid.css';
import PropTypes from 'prop-types';
import { BiLoaderCircle } from 'react-icons/bi';
import { GifItem } from '../../components';
import useFetchGifs from '../../hooks/useFetchGifs';

export function GifGrid(props) {
	const { category, handleRemove } = props;

	const { gifs, isLoading } = useFetchGifs(category);

	return (
		<>
			<h2>{category}</h2>
			{isLoading && (
				<h3 className='loader'>
					Loading <BiLoaderCircle />
				</h3>
			)}
			<div className='gifGrid'>
				{gifs.map((gif) => {
					const { id, title, url } = gif;
					return <GifItem key={id} title={title} url={url} />;
				})}
			</div>
			<button
				className='removeCategory'
				onClick={() => handleRemove(category)}
			>
				Remove category
			</button>
		</>
	);
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
