import { getPhotoById } from "@/api/api";

const ImagePage = async({ params }) => {
	const { id } = params;
	const { 
		url, 
		user, 
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
					<button className="bg-black px-4 rounded-md text-white">Download</button>
				</div>
				<div className="flex justify-center">
					<img alt="" className="w-[70rem]" src={url}/>
				</div>
				<div className="space-y-6">
					<p>{date}</p>
					<div className="flex flex-row flex-wrap">
						{
							tags.map(tag => (
								<p className="bg-gray-200 capitalize my-2 mr-2 p-1 rounded-md" key={tag}>{tag}</p>
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ImagePage;