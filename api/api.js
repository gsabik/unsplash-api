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
		user: image.user.name,
		userImage: image.user.profile_image?.small,
	}))

	return dataFormat;
}

export const getPhotoById = async(id) => {
	const response = await fetch(`${BASE_URL}/photos/${id}?client_id=${ACCESS_KEY}`);
	const data = await response.json();

	const dataFormat = {
		id: data.id,
		url: data.urls.regular,
		date: data.created_at, 
		location: data.location,
		user: data.user.name,
		userImage: data.user.profile_image?.small,
		userLocation: data.user.location,
		social: data.user.social.portfolio_url,
		likes: data.lies,
		tagsData: data.tags,
		download: data.links.download_location,
	};

	return dataFormat;
}