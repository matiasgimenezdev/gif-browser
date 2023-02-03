export async function getGifs(category) {
	const apiKey = 'rbAkwzqHDN7yxBKznn8UHyRLXnuKK5oa';
	const url = `https://api.giphy.com/v1/gifs/search?apiKey=${apiKey}&q=${category}&limit=12`;
	const response = await fetch(url);
	const { data } = await response.json();

	const gifs = data.map((element) => ({
		id: element.id,
		title: element.title,
		url: element.images.downsized_medium.url,
	}));

	return gifs;
}
