import './GifItem.css';
import PropTypes from 'prop-types';

export function GifItem(props) {
	const { url, title } = props;
	return (
		<div className='gifCard'>
			<img src={url} alt={title} />
			<figcaption>{title}</figcaption>
		</div>
	);
}

GifItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string.isRequired,
};

GifItem.defaultProps = {
	title: 'Unknown',
};
