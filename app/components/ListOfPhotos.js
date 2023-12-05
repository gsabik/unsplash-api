import Card from "./Card";

const ListOfPhotos = ({ photos }) => {
	return (
		<div className="gap-4 grid grid-cols-1 md:grid-cols-3 p-4">
			<div className="flex flex-col space-y-2">
				{
					photos.slice(0,6).map(photo => <Card key={photo.id} {...photo}/>)
				}
			</div>
			<div className="flex flex-col space-y-2">
				{
					photos.slice(7,13).map(photo => <Card key={photo.id} {...photo}/>)
				}
			</div>
			<div className="flex flex-col space-y-2">
				{
					photos.slice(14,20).map(photo => <Card key={photo.id} {...photo}/>)
				}
			</div>
		</div>
	);
}

export default ListOfPhotos;