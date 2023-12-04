import { getPhotos } from "@/api/api";
import ListOfPhotos from "./components/ListOfPhotos";

const HomePage = async() => {
	const photos = await getPhotos();
	
	return (
		<ListOfPhotos photos={photos}/>
	);
}

export default HomePage;