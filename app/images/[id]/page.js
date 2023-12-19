import { getPhotoById } from "@/api/api";
import { MapPin, Calendar } from "feather-icons-react/build/IconComponents";
import DownloadButton from "@/app/components/DownloadButton";

const ImagePage = async({ params }) => {
	const { id } = params;
	const { 
		url, 
		user, 
		location,
		date,
		userImage, 
		tagsData,
		download 
	} = await getPhotoById(id);

	// Format tags data
	const tags = tagsData.map(tag => tag.title);

	return (
		<section className="p-4">
			<div className="flex flex-col px-16 space-y-6">
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-row items-center">
						<img
							alt={`${user} Profile Photo`}
							className="rounded-full"
							src={userImage}
						/>
						<p className="font-semibold pl-2">{user}</p>
					</div>
					<DownloadButton download={download}/>
				</div>
				<div className="flex justify-center">
					<img alt="" className="w-[70rem]" src={url}/>
				</div>
				<div className="space-y-6">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-row space-x-2 text-gray-500">
							<MapPin className="h-[20px]"/>
							<p>
								{location.name == null ? "Location not available" : location.name}
							</p>
						</div>
						<div className="flex flex-row space-x-2 text-gray-500">
							<Calendar className="h-[20px]"/>
							<p>{date}</p>
						</div>
					</div>
					<div className="flex flex-row flex-wrap">
						{
							tags.map(tag => (
								<p className="bg-gray-200 capitalize my-2 mr-2 px-2 py-1 rounded-md" key={tag}>{tag}</p>
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ImagePage;