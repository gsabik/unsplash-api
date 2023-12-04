const ACCESS_KEY = "5IqHWU4xquE099XbsbgPgPj44qkyaXrL50ut-SPpj2k";
const BASE_URL = "https://api.unsplash.com";

export const getPhotos = async() => {
	const URL = `${BASE_URL}/photos/?client_id=${ACCESS_KEY}&per_page=20`;
	const response = await fetch(URL);
	const data = await response.json();

	const dataFormat = data.map(image => ({
		id: image.id,
		description: image.description ?? "Description not available",
		hoverDescription: image.alt_description,
		url: image.urls.regular,
		likes: image.likes,
		user: image.user.name,
	}))

	return dataFormat;
}